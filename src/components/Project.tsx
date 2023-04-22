import React from "react";
import styles from "../style";

interface ProjectProps {
  title: string;
  tech: string;
  status: string;
  type: string;
  description: string;
  link?: string;
  link_description?: string;
  className?: string;
}

const Project_Form: React.FC<ProjectProps> = ({
  title,
  tech,
  status,
  type,
  description,
  link,
  className,
}) => {
  const clickable = () => {
    if (link) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
          />
        </svg>
      );
    }
  };
  return (
    <a href={link} className={`py-2 ${className}`}>
      <div className="relative">
        <div className="absolute top-1 right-1 z-20">
          {clickable()}
        </div>
        <div
          className="bg-transparent border border-gray-600 rounded-[10px] w-[350px] h-[350px] overflow-auto divide-y divide-solid divide-white/30
"
        >
          <div className="sticky top-0 bg-primary py-4">
            <div className="px-4 text-semibold ss:text-[22px] text-[15px] leading-[30px]">
              {title}
            </div>
            <div className="flex flex-row items-end px-4">
              <div>
                <div className="w-auto h-auto bg-blue-800 rounded-lg px-2 text-[12px] inline-flex">
                  {type}
                </div>
                <div className="h-min bg-green-800 rounded-lg px-2 text-[12px]">
                  {status}
                </div>
              </div>
              <div className="text-sky-100 px-2 grid justify-items-center">
                {tech}
              </div>
            </div>
          </div>
          <div className="mt-2 py-4 px-4">{description}</div>
        </div>
      </div>
    </a>
  );
};

const Project = () => {
  return (
    <section
      id="project"
      className={`flex items-start xs:flex-row flex-col ${styles.paddingY} min-h-screen overflow-auto`}
    >
      <div className="text-white font-poppins">
        <h1
          className={`${styles.heading1} flex font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient-blue">Projects</span> {"  "}
        </h1>
        <div className="py-4 ml-5 text-white grid grid-rows-2 grid-flow-col gap-4">
          <Project_Form
            title="DevNomad"
            tech="Next13 (app router), React, TypeScript, Prisma, MongoDB"
            status="Building"
            type="Web"
            description="True digital nomad experience comes from your ability to find where you can 'nomad'. DevNomad is a platform where you can share, upload, host Digital Nomad's workplace and review the locations around the world."
          />
          <Project_Form
            title="Talent Park"
            tech="Next13, React, TypeScript, Cloudflare, Firebase Realtime Database, Firebase Auth"
            status="Version 0.1 Completed"
            type="Web"
            description="Ever got sick of getting an offer for the role you don't fit at all or having to look forever for that dream role to appear? Talent Park is exactly where you don't have to worry about that! Once uploaded your current and wanted positions, your details will be actively looked into by recruiters."
            link="https://talent-park.pages.dev/"
          />
          <Project_Form
            title="OpenAI Consult Chatbot"
            tech="Next13, React, OpenAI API, TypeScript, Nodejs, Express, AWS Lambda, Cloudflare"
            status="Completed"
            type="Web"
            description="This is where anyone can consult to an AI configured to answer your life related issues. I used TypeScript-Next13 frontend and hosted it on Cloudflare, while running my Express backend app on AWS Lambda."
            link="https://lifeconsult-chat-ab.pages.dev/"
          />
          <Project_Form
            title="Parable: Menifesting your goal"
            tech="TypeScript, React Native, Firebase"
            status="Delayed"
            type="Mobile"
            description="I believe there are still values to details in life that we
              often forget."
          />
          <Project_Form
            title="Google Streetview Panorama by Coordinates"
            tech="Python, GoogleMapsAPI"
            status="Completed"
            type="Code"
            description="Participating in a project where we ran a machine learning
                through street views, to study on how much green (plants and trees) were present
                by region. I have provided the team a Google Colab code on Python
                that returns google street photos in panorama by provided
                coornidates in a csv file."
            link="https://colab.research.google.com/drive/1lhO4bK3c_7og1hwbTSO_6upMlws1X2mD?usp=sharing"
          />
          <Project_Form
            title="TypeScript Blog"
            tech="TypeScript, JavaScript, Java"
            status="On going"
            type="Code"
            description="Typescript is awesome, it is a language that is highly
                recommened by many developers. Many of the code samples
                people find on guides and libraries are written in
                JavaScript. Even though they are fairly similar and can easily be written one way or
                the other, I noticed even some learners finding it hard to adopt to TypeScript.
                This project is to show demos of TypeScript: How they work, What to expect, and How to style the code."
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
