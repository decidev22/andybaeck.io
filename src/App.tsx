import React, { useState, useEffect } from "react";
import {
  Content_Layout,
  Loading_Screen,
  Blog,
  Nav_Bar,
} from "./components/index";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./style";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBlog, setBlog] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  // const displayMain = () => {
  //   if (isLoading == true) {
  //     return <Loading_Screen />;
  //   }
  //   return <Content_Layout />;
  // };

  // const displayProject = () => {
  //   if (isProject == true) {
  //     return (
  //       <div>
  //         <Nav_Bar /> <Project />
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div>
      {" "}
      <div
        className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-10 bg-primary`}
      >
        <div className={`${styles.boxWidth}`}>
          <Nav_Bar />
        </div>
      </div>
      <div>{isLoading ? <Loading_Screen /> : <Content_Layout />}</div>
    </div>
  );
};

export default App;
