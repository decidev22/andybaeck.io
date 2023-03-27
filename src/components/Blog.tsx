import React from "react";
import { useState } from "react";
import styles from "../style";

import Starting_Blog from "../blogs/starting_blog";
import Second_Blog from "../blogs/second_blog";

interface ArticleProps {
  title: string;
  description: string;
  date: string;
}

const BlogForm: React.FC<ArticleProps> = ({ title, description, date }) => {
  return (
    <div className="py-2">
      <div className="flex inline-flex min-w-[500px] bg-banner-gradient rounded-lg p-2 ">
        <div className="flex-col">
          <div className="w-full text-blue-300 text-[25px]">{title}</div>
          <div className="w-full text-white">{description}</div>
          <div className="w-full text-gray-400">{date}</div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [blog, setBlog] = useState(false);
  const toggleBlog = () => {
    setBlog(!blog);
  };
  return (
    <section
      id="blog"
      className={`flex flex-col items-start min-h-screen ${styles.paddingY} text-white`}
    >
      <div className="flex-col sm:px-16 md:px-0 sm:py-6 py-4 w-full">
        <h1
          className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          <span className="text-gradient-purple">Blog</span> {"  "}
        </h1>
        <div>
          <div>
            {" "}
            <BlogForm
              title="Starting Blog"
              description="Why I am starting blogging"
              date="27 Mar 2023"
            />
            <button onClick={toggleBlog}>Read</button>
            {blog && (
              <div onClick={toggleBlog}>
                {" "}
                <Starting_Blog />
              </div>
            )}
          </div>

          <BlogForm
            title="Basics in TypeScript"
            description="What you should really know in setting up typescript"
            date="27 Mar 2023"
          />
        </div>
      </div>
    </section>
  );
};
export default Blog;
