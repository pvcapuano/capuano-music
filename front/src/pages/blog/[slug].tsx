import React from "react";
import { client } from "../../../lib/client";
import { GetStaticProps } from "next";
import { format } from "date-fns";

const BlogDetails = ({ blog }: any) => {
  const formattedDate = format(new Date(blog.releaseDate), "dd-MM-yyyy");
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      key={blog._id}
    >
      <div className="bg-white rounded-lg shadow-2xl w-80 md:w-96 md:h-96  p-4 flex flex-col ">
        <span className="text-xs mb-4">{formattedDate}</span>
        <h1 className="text-center font-bold text-2xl">{blog.title}</h1>

        <p className="text-justify flex-wrap break-words text-lg my-10">
          {blog.description}
        </p>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "blog"] {
      slug {
        current
      }
    }`;

  const blogs = await client.fetch(query);

  const paths = blogs.map((blog: any) => ({
    params: {
      slug: blog.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;

  if (!slug) {
    return {
      notFound: true,
    };
  }
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blogsQuery = '*[_type == "blog"]';

  const blog = await client.fetch(query);
  const blogs = await client.fetch(blogsQuery);

  return {
    props: {
      blogs,
      blog,
    },
  };
};

export default BlogDetails;
