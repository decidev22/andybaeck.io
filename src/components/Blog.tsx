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
      <div className="flex inline-flex h-[350px] w-[350px] bg-tansparent border border-gray-700 rounded-lg p-5 ">
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
  const [first_blog, set_first_Blog] = useState(false);
  const toggle_first_Blog = () => {
    set_first_Blog(!first_blog);
  };
  const [second_blog, set_second_Blog] = useState(false);
  const toggle_second_Blog = () => {
    set_second_Blog(!second_blog);
  };
  return (
    <section
      id="blog"
      className={`flex flex-col items-start min-h-screen ${styles.paddingY} text-white`}
    >
      <div className="flex-col sm:px-16 md:px-0 sm:py-6 py-4 w-full overflow-hidden">
        <h1
          className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          <span className="text-gradient-green">Blog</span> {"  "}
        </h1>
        <div className="ml-5">
          <div>
            {" "}
            <button onClick={toggle_first_Blog} className="text-left">
              <BlogForm
                title="Starting Blog"
                description="Why I am starting blogging"
                date="27 Mar 2023"
              />
            </button>
            {first_blog && (
              <div>
                {" "}
                <Starting_Blog />
              </div>
            )}{" "}
          </div>
          <div>
            <button onClick={toggle_second_Blog} className="text-left">
              <BlogForm
                title="Basics in TypeScript"
                description="What you should really know in setting up typescript"
                date="27 Mar 2023"
              />
            </button>
            {second_blog && (
              <div>
                {" "}
                <Second_Blog />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
