import React from "react";
import styles from "../style";

const Blog = () => {
  return (
    <section
      id="blog"
      className={`flex items-start xs:flex-row flex-col ${styles.paddingY} min-h-screen`}
    >
      <div className="text-white">Blog</div>
    </section>
  );
};

export default Blog;
