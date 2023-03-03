import React from "react";
import styles from "../style";
const About_Me = () => {
  return (
    <section
      id="mypassion"
      className={`flex flex-col items-start min-h-screen ${styles.paddingY} text-white`}
    >
      <h1
        className={`${styles.heading1} flex font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px] ml-14`}
      >
        {/* <br className="sm:block hidden" /> {"  "} */}
        <span className="text-gradient-purple">My Passion</span> {"  "}
      </h1>
      {/* <div className={`${styles.heading1}  text-gradient font-poppins`}></div> */}
      <div className={`${styles.padding}`}>
        <div className={`${styles.heading2} ml-14 text-white font-poppins`}>
          Innovate Software with Better Engineering and Ideas{" "}
        </div>
        <div className={`${styles.paragraph} ml-14 text-white font-poppins`}>
          I believe every code and service can be improved.{" "}
          <br className="sm:block hidden" /> {"  "}Sometimes it's the algorithm
          or design. <br className="sm:block hidden" /> {"  "} But sometimes,
          it's how we see the world through software.{" "}
          <br className="sm:block hidden" /> {"  "}I love sharing thoughts and
          learning new knowledge.
          <br className="sm:block hidden" /> {"  "}
        </div>
        <br className="sm:block hidden" />
        <div className={`${styles.heading2} ml-14 text-white font-poppins`}>
          Work Experience <br className="sm:block hidden" /> {"  "}
        </div>
        <div className={`${styles.paragraph} ml-14 text-white font-poppins`}>
          Work Experience <br className="sm:block hidden" /> {"  "}
        </div>
      </div>
    </section>
  );
};

export default About_Me;
