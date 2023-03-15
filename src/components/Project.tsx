import React from "react";
import styles from "../style";

const Project = () => {
  return (
    <section
      id="project"
      className={`flex items-start xs:flex-row flex-col ${styles.paddingY} min-h-screen`}
    >
      <div className="text-white font-poppins">
        <h1
          className={`${styles.heading1} flex font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient-blue">Projects</span> {"  "}
        </h1>
        <div>
          {/* This parent div, I want to make it so when the length of content is longer than pageview, it makes a horizaontal list, Ib might try to apply one same to skill list */}
          <div className="py-4 ml-14 text-white">
            <div className="py-2">
              <div className="bg-banner-gradient rounded-[10px] p-5">
                <div className="text-semibold ss:text-[30px] text-[22px] ss:leading-[50px] leading-[35px]">
                  Python: Obtain Google Streetview Panorama by coordinates
                </div>
                <div className="flex flex-row">
                  {" "}
                  <div className="text-slate-400">
                    Technology used: Python GoogleMapsAPI
                  </div>
                  <div className="ml-5 text-blue-400">Status: Completed</div>
                </div>

                <div className="mt-4 ">
                  Participating in a project where we ran a machine learning
                  through street views, <br className="sm:block hidden" />
                  to study on how much green (plants and trees) were present by
                  region. <br className="sm:block hidden" />I have provided the
                  team a Google Colab code on Python
                  <br className="sm:block hidden" />
                  that returns google street photos in panorama by coornidates.
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="bg-banner-gradient rounded-[10px] p-5">
                <div className="text-semibold ss:text-[30px] text-[22px] ss:leading-[50px] leading-[35px]">
                  Teach TypeScript for Beginners
                </div>
                <div className="flex flex-row">
                  {" "}
                  <div className="text-slate-400">
                    Technology used: TypeScript, JavaScript, Java
                  </div>
                  <div className="ml-5 text-blue-400">Status: Initiating</div>
                </div>

                <div className="mt-4 ">
                  Typescript is awesome, it is a language that is highly
                  recommened by many developers around the world.{" "}
                  <br className="sm:block hidden" /> However, many of the code
                  samples people find on guides and libraries are written in
                  JavaScript. <br className="sm:block hidden" /> Even though
                  they are fairly similar and can easily be written one way or
                  the other, <br className="sm:block hidden" /> I noticed even
                  some developers finding it hard to adopt to TypeScript.{" "}
                  <br className="sm:block hidden" /> This project is to show
                  demos of TypeScript: <br className="sm:block hidden" /> How
                  they work, What to expect, and How to style the code.
                  {"  "}
                </div>
              </div>
            </div>
            <div className="py-2">
              <div className="bg-banner-gradient rounded-[10px] p-5">
                <div className="text-semibold ss:text-[30px] text-[22px] ss:leading-[50px] leading-[35px]">
                  Parable - Keep the details in your life
                </div>
                <div className="flex flex-row">
                  <div className="text-slate-400">
                    Technology used: TypeScript, React Native
                  </div>
                  <div className="ml-5 text-blue-400">Status: Designing</div>
                </div>
                <div className="mt-4 ">
                  Minimalistic is a keyword everyone loves to share since 21st
                  century.
                  <br className="sm:block hidden" />
                  {"  "}
                  I believe there are still values to details in life that we
                  often forget.
                  <br className="sm:block hidden" />
                  {"  "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
