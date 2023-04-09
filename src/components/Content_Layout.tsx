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
  Contact_Modal,
  Footer,
  ClickChat,
  Click_Card,
} from "./index";
// import Nav_Bar from "./Nav_Bar";
// import Main_Page from "./Main_Page";
// import About_Me from "./About_Me";
// import Project from "./Project";

const Content_Layout = ({}) => {
  return (
    <div className="relative bg-primary w-full">
      <Click_Card />
      <ClickChat />

      <div className={`bg-primary ${styles.flexStart} overflow-hidden`}>
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
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Content_Layout;
