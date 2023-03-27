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
      className="skill font-semibold"
      ref={ref}
      variants={skillAppear}
      initial="hidden"
      animate={control}
      transition={{ delay: 1 }}
    >
      <div className="hover:scale-110">{skill_item}</div>
      <br className="sm:block hidden" />
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
      <div className="flex-col sm:px-16 px-6 sm:py-6 py-4 max-w-full">
        <h1
          className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient-purple">About Me</span> {"  "}
        </h1>
        <div className="flex xs:flex-col md:flex-row overflow-hidden">
          <div className="flex flex-col">
            <div className={`${styles.heading2} ml-14 text-white font-poppins`}>
              Bringing dreams to realality <br className="ss:block hidden" />{" "}
            </div>
            <div
              className={`${styles.paragraph} ml-14 font-poppins text-[22px] leading-loose`}
            >
              Innovating software with passion is key to success.{" "}
              <br className="sm:block hidden" /> {"  "}I believe every code and
              service can be improved. <br className="sm:block hidden" /> {"  "}
              Sometimes it's the algorithm or design.{" "}
              <br className="sm:block hidden" /> {"  "} Sometimes it's how we
              see the world through software. <br className="sm:block hidden" />{" "}
              Most importantly, it is how we dare to change the way we live.
              <br className="sm:block hidden" /> {"  "}I love sharing thoughts
              and learning new knowledge.
              <br className="sm:block hidden" /> {"  "}
            </div>
            <br className="sm:block hidden" />
          </div>
          <div>
            {" "}
            <div
              className={`${styles.heading2} ml-14 text-white font-poppins `}
            >
              Skills and Certificates <br className="sm:block hidden" /> {"  "}
            </div>
            <div className="cert-box-ul">
              <motion.div
                className={`${styles.paragraph} flex flex-row mt-4 ml-14 font-poppins text-white leading-loose`}
              >
                <div className="flex min-w-full">
                  <div className="flex flex-col">
                    <Skill skill_item="Bachelor of Science in Computer Science (University of Auckland)" />
                    <Skill skill_item="Foundations of User Experience (UX) Design (Coursera)" />
                    <Skill skill_item="Back End Development and APIs (FreeCodeCamp)" />
                    <Skill skill_item="Graph Developer - Associate (Apollo GraphQL)" />

                    <Skill skill_item="Serverless and Microservices for AWS (LinkedIn Learning)" />

                    <Skill skill_item="Data Visualisation with Python (FutureLearn)" />
                    <Skill skill_item="Certified in Cybersecurity (CC) 1M (ISC2)" />
                    <Skill skill_item="Object-Oriented Programming in JavaScript (Udemy)" />

                    <Skill skill_item="CCNA R&S: Routing and Switching Essentials (Cisco)" />
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="self-center w-10 h-10"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>

                <div className="flex min-w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-10 h-10 self-center"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                  </svg>

                  <div className="flex flex-col ml-5">
                    <Skill skill_item="Security Operations and Administration ISC2 (Coursera)" />

                    <Skill skill_item="IT Security: Defense against the digital dark arts (Google)" />

                    <Skill skill_item="Using Python to Interact with Operating System (Google)" />

                    <Skill skill_item="TypeScript Design Patterns (Udemy)" />
                    <Skill skill_item="TypeScript: Getting Started (Pluralsight)" />

                    <Skill skill_item="ArcGIS Pro Basics (Esri)" />
                    <Skill skill_item="Data Visualisation with Python: MATPLOTLIB and visual Analysis (FutureLearn)" />
                  </div>
                </div>
              </motion.div>
            </div>
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
