import React from "react";
import styles from "../style";

const Blog = () => {
  return (
    <section
      id="blog"
      className={`flex items-start xs:flex-row flex-col ${styles.paddingY} min-h-screen text-white`}
    >
      <div className="flex-col sm:px-16 px-6 sm:py-6 py-4 max-w-full">
        <h1
          className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient">Blog</span> {"  "}
        </h1>
        <div className="font-bold text-[30px]">Coming Soon!</div>
      </div>
    </section>
  );
};

export default Blog;
