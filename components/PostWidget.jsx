'use client'
import React from "react";
import moment from "moment";
import Link from "next/link";

// here i am giving slug as props rather we will check this property on the server side
const PostWidget = ({ categories, slug, data, simdata }) => {
  // const [relatedPosts, setRelatedPosts] = useState([]);
  // console.log(data);
  // console.log(slug);
  
  // useEffect(() => {
  //   if (data) {
  //     setRelatedPosts(prevRelatedPosts => data)
  //     };
  //   } , [slug]);

  //   console.log(relatedPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? "Related Posts" : "Recent Posts"}</h3>
      {(slug ? data : data).map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              className="align-middle rounded-full"
              alt={post.title}
              height="60px"
              width="60px"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
