import React from "react";
import { useState } from "react";
import styles from "../style";

import Starting_Blog from "../blogs/starting_blog";
import Second_Blog from "../blogs/second_blog";
import Blog_Code_Update from "../blogs/blog_code_updates";
import About_GoodCode from "../blogs/about_good_code";

interface ArticleProps {
  title: string;
  description: string;
  date: string;
}

const BlogForm: React.FC<ArticleProps> = ({ title, description, date }) => {
  return (
    <div className="py-2">
      <div className="flex inline-flex h-[150px] w-[425px] bg-tansparent border border-gray-700 rounded-lg p-5 overflow-y-hidden">
        <div className="flex-col">
          <div className="flex flex-row items-center">
            {" "}
            <div className="bg-gradient-to-r from-sky-500 to-fuchsia-400 text-transparent bg-clip-text text-[25px] font-bold">
              {title}
            </div>
            <div className="ml-2 text-slate-400 text-[12px] w-[100px]">
              {date}
            </div>
          </div>

          <div className="w-full text-white overflow-y-auto">{description}</div>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [first_blog, set_first_Blog] = useState(false);
  const toggle_first_Blog = () => {
    set_first_Blog(!first_blog);
    set_second_Blog(false);
    set_blog_code_updates(false);
    set_about_good_code(false);
  };
  const [second_blog, set_second_Blog] = useState(false);
  const toggle_second_Blog = () => {
    set_second_Blog(!second_blog);
    set_first_Blog(false);
    set_blog_code_updates(false);
    set_about_good_code(false);
  };
  const [blog_code_updates, set_blog_code_updates] = useState(false);
  const toggle_blog_code_updates = () => {
    set_blog_code_updates(!blog_code_updates);
    set_first_Blog(false);
    set_second_Blog(false);
    set_about_good_code(false);
  };
  const [about_good_code, set_about_good_code] = useState(false);
  const toggle_about_good_code = () => {
    set_about_good_code(!about_good_code);
    set_first_Blog(false);
    set_second_Blog(false);
    set_blog_code_updates(false);
  };
  return (
    <section
      id="blog"
      className={`flex items-start min-h-screen ${styles.paddingY} text-white`}
    >
      <div className="flex flex-col sm:px-16 md:px-0 sm:py-6 py-4 w-full overflow-hidden">
        <div className="flex-col">
          <h1
            className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
          >
            <span className="text-gradient-green">Blog</span> {"  "}
          </h1>

          <div className="flex flex-row ml-5">
            <div className="flex flex-col">
              <div>
                <button onClick={toggle_about_good_code} className="text-left">
                  <BlogForm
                    title="About a good project & code"
                    description="I've had some issues on my past couple of projects. Top two issues I had were, 1) Not knowing enough of the framework. 2) My code ends up being not really scalable time to time."
                    date="18 Apr 2023"
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={toggle_blog_code_updates}
                  className="text-left"
                >
                  <BlogForm
                    title="New Code on my Blog"
                    description="Click to see what the challenges were, what I have done, and also what I think about my work."
                    date="8 Apr 2023"
                  />
                </button>
              </div>
              <div>
                {" "}
                <button onClick={toggle_first_Blog} className="text-left">
                  <BlogForm
                    title="Blog -init"
                    description="Click to read why I started building this website and writing blogs."
                    date="27 Mar 2023"
                  />
                </button>
              </div>
              <div>
                <button onClick={toggle_second_Blog} className="text-left">
                  <BlogForm
                    title="Basics in TypeScript"
                    description="What you should really know in setting up typescript"
                    date="27 Mar 2023"
                  />
                </button>
              </div>
            </div>
            <div className="flex ml-5 py-2">
              {about_good_code && (
                <div>
                  {" "}
                  <About_GoodCode />
                </div>
              )}
              {blog_code_updates && (
                <div>
                  {" "}
                  <Blog_Code_Update />
                </div>
              )}
              {first_blog && (
                <div>
                  {" "}
                  <Starting_Blog />
                </div>
              )}{" "}
              {second_blog && (
                <div>
                  {" "}
                  <Second_Blog />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
