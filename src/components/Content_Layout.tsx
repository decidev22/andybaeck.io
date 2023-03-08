import styles from "../style";
import React, { useState, useEffect } from "react";
// import { JogR_mini_logo, SeeMyCode } from "../assets";
import { motion } from "framer-motion";
import { Greeting, My_Interest } from ".";
import { navLinks } from "../constants";
import {
  Nav_Bar,
  Main_Page,
  About_Me,
  Project,
  Blog,
  Contact,
  Footer,
} from "./index";
// import Nav_Bar from "./Nav_Bar";
// import Main_Page from "./Main_Page";
// import About_Me from "./About_Me";
// import Project from "./Project";

const Content_Layout = ({}) => {
  return (
    <div className="relative bg-primary w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0`}>
        <div className={`${styles.boxWidth}`}>
          <Nav_Bar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Main_Page />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <About_Me />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Project />
          <Blog />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Content_Layout;
