import React from "react";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import styles from "../style";
import { motion, useAnimation, useScroll, MotionProps } from "framer-motion";
import { string } from "prop-types";
import {
  graphql,
  nestjs,
  nodejs,
  python,
  react,
  typescript,
  vitejs,
} from "../assets";

// About Me, top part
const skillAppear = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

interface SkillProps extends MotionProps {
  skill_item: string;
}

const Skill = ({ skill_item }: SkillProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="skill"
      ref={ref}
      variants={skillAppear}
      initial="hidden"
      animate={control}
    >
      <div>{skill_item}</div>
    </motion.div>
  );
};

// About Me Main part

const About_Me = () => {
  // About Me bottom part
  const ref = useRef(null);
  // return
  return (
    <section
      id="aboutme"
      className={`flex flex-col items-start min-h-screen ${styles.paddingY} text-white`}
    >
      {/* <div className={`${styles.heading1}  text-gradient font-poppins`}></div> */}
      <div className="flex-col sm:px-16 px-6 sm:py-6 py-4">
        <h1
          className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient-purple">About Me</span> {"  "}
        </h1>
        <div className="flex flex-col md:flex-row">
          <div>
            <div className={`${styles.heading2} ml-14 text-white font-poppins`}>
              Innovate Software with <br className="ss:block hidden" /> Better
              Engineering and Ideas{" "}
            </div>
            <div
              className={`${styles.paragraph} ml-14 text-white font-poppins`}
            >
              I believe every code and service can be improved.{" "}
              <br className="sm:block hidden" /> {"  "}Sometimes it's the
              algorithm or design. <br className="sm:block hidden" /> {"  "}{" "}
              Sometimes it's how we see the world through software.{" "}
              <br className="sm:block hidden" /> {"  "}I love sharing thoughts
              and learning new knowledge.
              <br className="sm:block hidden" /> {"  "}
            </div>
            <br className="sm:block hidden" />
          </div>
          <div>
            {" "}
            <div className={`${styles.heading2} ml-14 text-white font-poppins`}>
              Skills and Certificates <br className="sm:block hidden" /> {"  "}
            </div>
            <motion.div
              className={`${styles.paragraph} ml-14 text-white font-poppins`}
            >
              <Skill skill_item="Bachelor of Science in Computer Science (University of Auckland)" />
              <br className="sm:block hidden" /> {"  "}
              <Skill skill_item="Foundations of User Experience (UX) Design (Coursera)" />
              <br className="sm:block hidden" /> {"  "}
              <Skill skill_item="Back End Development and APIs (FreeCodeCamp)" />
              <br className="sm:block hidden" /> {"  "}
              <Skill skill_item="Graph Developer - Associate (Appolo GraphQL)" />
              <br className="sm:block hidden" /> {"  "}
              <Skill skill_item="Serverless and Microservices for AWS" />
              <br className="sm:block hidden" /> {"  "}
              <Skill skill_item="Data Visualisation with Python (FutureLearn)" />
              <br className="sm:block hidden" /> {"  "}
              <Skill skill_item="CCNA R&S: Routing and Switching Essentials (Cisco)" />
              <br className="sm:block hidden" /> {"  "}
            </motion.div>
          </div>
        </div>
      </div>
      <div className="flex w-full md:flex-row sm:px-16 px-6 sm:py-6 py-4 overflow-x-hidden">
        <>
          <ul ref={ref} className="flex w-4/5 skil-logo-box-ul">
            <li className="skill-log-li">
              <img
                src={typescript}
                alt="TypeScript"
                // className="h-auto w-full"
              />
            </li>
            <li className="skill-log-li">
              <img src={nestjs} alt="NestJS" />
            </li>
            <li className="skill-log-li">
              <img src={graphql} alt="Apollo GraphQL" />
            </li>
            <li className="skill-log-li">
              <img src={nodejs} alt="NodeJS" />
            </li>
            <li className="skill-log-li">
              <img src={python} alt="Python" />
            </li>
            <li className="skill-log-li">
              <img src={react} alt="ReactJS" />
            </li>
            <li className="skill-log-li">
              <img src={vitejs} alt="ViteJS" />
            </li>
          </ul>
        </>
      </div>
    </section>
  );
};

export default About_Me;
