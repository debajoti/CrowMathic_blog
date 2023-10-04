import Image from 'next/image'
import { PostCard, PostWidget, Categories } from '../components';
import { getPosts, getRecentPosts, getCategories, getFeaturedPosts } from '../services';
import { FeaturedPosts } from '../sections';

export default async function Home() {

  const posts = await getPosts() || [];
  const recentPosts = await getRecentPosts() || [];
  const categories = await getCategories() || [];
  const featuredPosts = await getFeaturedPosts() || [];

  return (
   <div className='container mx-auto px-10 mb-8'>
    <FeaturedPosts featuredPosts={featuredPosts} />
    
    <nav>
      <title className='decoration-white'>CrowMathic</title>
      <link rel="icon" href="/favicon.ico" />
    </nav>

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className='lg:col-span-8 col-span-1'>
        {posts.map( (post) =>   <PostCard post={post.node} key={post.title} /> )}
      </div>
      <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
                <PostWidget data={recentPosts}/>
                <Categories categories={categories}/>
          </div>
      </div>
    </div>
   </div>
  )
}

