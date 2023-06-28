import React from "react";
import Link from "next/link";

const BlogPost = ({ blog }: any) => {
  return (
    <>
      <Link href={`/blog/${blog.slug.current}`}>
        <div className="flex items-center justify-center border-1 rounded-lg shadow-2xl w-80 md:w-96 mt-10 h-24 bg-white">
          <h1 className="font-bold text-2xl">{blog.title}</h1>
        </div>
      </Link>
    </>
  );
};

export default BlogPost;
