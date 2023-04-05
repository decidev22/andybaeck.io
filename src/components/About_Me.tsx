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
// const skillAppear = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 },
// };

// interface SkillProps extends MotionProps {
//   skill_item: string;
// }

interface CertProps {
  cert: string;
  issuer: string;
  date: string;
  bordercolor: string;
  textcolor: string;
}

const Cert = ({ cert, issuer, date, bordercolor, textcolor }: CertProps) => {
  return (
    <div
      className={`relative group h-[165px] w-[165px] rounded-lg border-2 border-gray-800 hover:scale-110`}
    >
      <div
        className={`h-[155px] w-[155px] rounded-lg border-2 ${bordercolor} p-1 ${textcolor}`}
      >
        <p className={`text-[15px] font-bold`}>{cert}</p>

        <p className="text-[13px]">{issuer}</p>
        <div className="absolute bottom-2 right-3">
          <p className="text-[11px]">{date}</p>
        </div>
      </div>
    </div>
  );
};

// const Skill = ({ skill_item }: SkillProps) => {
//   const control = useAnimation();
//   const [ref, inView] = useInView();
//   useEffect(() => {
//     if (inView) {
//       control.start("visible");
//     } else {
//       control.start("hidden");
//     }
//   }, [control, inView]);

//   return (
//     <motion.div
//       className="skill font-semibold"
//       ref={ref}
//       variants={skillAppear}
//       initial="hidden"
//       animate={control}
//       transition={{ delay: 1 }}
//     >
//       <div className="hover:scale-110">{skill_item}</div>
//       <br className="sm:block hidden" />
//     </motion.div>
//   );
// };

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
          <span className="text-gradient-purple mb-3">About Me</span> {"  "}
        </h1>
        <div className="flex xs:flex-col overflow-hidden">
          <div className="flex flex-col md:w-[800px]">
            <div className={`${styles.heading2} ml-14 text-white font-poppins`}>
              Bringing dreams to reality <br className="ss:block hidden" />{" "}
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
                className={`${styles.paragraph} flex flex-row mt-4 ml-14 font-poppins leading-loose`}
              >
                <div className="flex min-w-full">
                  <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <Cert
                      cert="Bachelor of Science in Computer Science"
                      issuer="University of Auckland"
                      date="May 2019"
                      bordercolor="border-blue-500"
                      textcolor="text-blue-400"
                    />
                    <Cert
                      cert="Object-Oriented Programming in JavaScript"
                      issuer="Udemy"
                      date="Feb 2021"
                      bordercolor="border-teal-800"
                      textcolor="text-teal-400"
                    />
                    <Cert
                      cert="TypeScript Design Patterns"
                      issuer="Udemy"
                      date="Aug 2021"
                      bordercolor="border-teal-800"
                      textcolor="text-teal-400"
                    />
                    <Cert
                      cert="Using Python to Interact with Operating System"
                      issuer="Coursera-Google"
                      date="2021 Nov"
                      bordercolor="border-teal-800"
                      textcolor="text-teal-400"
                    />
                    <Cert
                      cert="TypeScript: Getting Started"
                      issuer="Pluralsight"
                      date="2021 Nov"
                      bordercolor="border-teal-800"
                      textcolor="text-teal-400"
                    />
                    <Cert
                      cert="Project Management: Agile Menifesto Principles"
                      issuer="FutureLearn"
                      date="2021 Nov"
                      bordercolor="border-teal-800"
                      textcolor="text-teal-400"
                    />
                    <Cert
                      cert="Back End Development and APIs"
                      issuer="FreeCodeCamp"
                      date="2021 Nov"
                      bordercolor="border-purple-800"
                      textcolor="text-purple-400"
                    />

                    <Cert
                      cert="Graph Developer - Associate"
                      issuer="Apollo GraphQL"
                      date="2021 Nov"
                      bordercolor="border-purple-800"
                      textcolor="text-purple-400"
                    />
                    <Cert
                      cert="Serverless and Microservices for AWS"
                      issuer="LinkedIn Learning"
                      date="Nov 2022"
                      bordercolor="border-purple-800"
                      textcolor="text-purple-400"
                    />
                    <Cert
                      cert="Foundations of User Experience (UX) Design"
                      issuer="Coursera-Google"
                      date="Apr 2021"
                      bordercolor="border-lime-800"
                      textcolor="text-lime-400"
                    />
                    <Cert
                      cert="Data Visualisation with Python: Matplotlib"
                      issuer="FutureLearn"
                      date="Apr 2021"
                      bordercolor="border-lime-800"
                      textcolor="text-lime-400"
                    />

                    <Cert
                      cert="Certified in Cybersecurity (CC) 1M"
                      issuer="ISC2"
                      date="Mar 2023"
                      bordercolor="border-sky-800"
                      textcolor="text-sky-400"
                    />

                    <Cert
                      cert="CCNA R&S: Routing and Switching Essentials: Level2"
                      issuer="Cisco"
                      date="Jun 2018"
                      bordercolor="border-sky-800"
                      textcolor="text-sky-400"
                    />
                    <Cert
                      cert="CCNA R&S: Introduction to Networks: Level1"
                      issuer="Cisco"
                      date="Jun 2017"
                      bordercolor="border-sky-800"
                      textcolor="text-sky-400"
                    />

                    <Cert
                      cert="Security Operations and Administration"
                      issuer="ISC2"
                      date="2021 Nov"
                      bordercolor="border-sky-800"
                      textcolor="text-sky-400"
                    />
                    <Cert
                      cert="Defense against the digital dark arts"
                      issuer="Coursera-Google"
                      date="2021 Nov"
                      bordercolor="border-sky-800"
                      textcolor="text-sky-400"
                    />

                    <Cert
                      cert="ArcGIS Pro Basics"
                      issuer="Esri"
                      date="2021 Nov"
                      bordercolor="border-pink-800"
                      textcolor="text-pink-400"
                    />
                    <Cert
                      cert="Google Analytics for Beginners"
                      issuer="Google Digital Academy"
                      date="Feb 2019"
                      bordercolor="border-pink-800"
                      textcolor="text-pink-400"
                    />
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
