import React from "react";
import { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { client } from "../../lib/client";
import BlogPost from "@/components/BlogPost";

interface Blog {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  releaseDate: string;
  description: string;
}

interface HomeProps {
  blogs: Blog[];
}

const BlogPage: NextPage<HomeProps> = ({ blogs }) => {
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center p-2 mt-14">
        <div className="flex flex-col justify-center items-center w-full">
          {blogs?.map((blog) => (
            <BlogPost key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const query = '*[_type == "blog"]';
  const blogs = await client.fetch(query);

  return {
    props: {
      blogs,
    },
  };
};

export default BlogPage;
