'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { getPosts, getPostDetails } from '../../../services'
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../../components'
import { getCategories, getRecentPosts, getComments } from '../../../services'

const PostDetails = async ({params}) => {
  const router = useRouter();
  // console.log(params)
  const categories = await getCategories() || [];
  // const similarPosts = await getSimilarPosts(params.categories, params.slug) || [];
  const recentPosts = await getRecentPosts() || [];
  const data = await getPostDetails(params.slug);
  const commentsData = await getComments(params.slug)
  // console.log(commentsData);

  if(router.isFallback){
    return <Loader />
  }

    return(
    <div className='container mx-auto px-10 mb-8'>
      <div className='grid grid-col-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
            <PostDetail post={data}/>
            <Author author={data.author} />
            <CommentsForm slug={data.slug} />
            <Comments comments={commentsData} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
                <PostWidget data={recentPosts} slug={params.slug}/>
                <Categories categories={categories}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

// export async function getStaticProps({ params }){
//   const data = await getPostDetails(params.slug) ;

//   return {
//     props: { post : data}
//   }
// }

export async function getStaticPaths(){
   const posts =await getPosts();
  //  console.log(posts);

   return{
    paths : posts.map(({ node : { slug }}) => ({ params : { slug }})),
    fallback: true,
   }
}
