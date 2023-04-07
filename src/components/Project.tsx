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
}

const Project_Form: React.FC<ProjectProps> = ({
  title,
  tech,
  status,
  type,
  description,
  link,
}) => {
  return (
    <div className="py-2 ">
      <a href={link}>
        <div className="bg-transparent border border-gray-600 rounded-[10px] w-[350px] h-[350px] overflow-auto divide-y divide-solid divide-white/30">
          <div className="p-4 bg-primary text-semibold ss:text-[22px] text-[15px] leading-[30px] mb-2 sticky top-0">
            {title}
          </div>
          <div className="flex flex-row items-center py-2 px-4">
            <div>
              <div className="w-auto h-auto bg-blue-800 rounded-lg px-2 text-[12px] mb-1 inline-flex">
                {type}
              </div>
              <div className="h-min bg-green-800 rounded-lg px-2 text-[12px]">
                {status}
              </div>
            </div>
            <div className="text-slate-200 px-2 grid justify-items-center">
              {tech}
            </div>
          </div>

          <div className="mt-2 py-4 px-4">{description}</div>
        </div>
      </a>
    </div>
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
            title="Python: Obtain Google Streetview Panorama by coordinates"
            tech="Python GoogleMapsAPI"
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
            status="Initiating"
            type="Code"
            description="Typescript is awesome, it is a language that is highly
                recommened by many developers. Many of the code samples
                people find on guides and libraries are written in
                JavaScript. Even though they are fairly similar and can easily be written one way or
                the other, I noticed even some learners finding it hard to adopt to TypeScript.
                This project is to show demos of TypeScript: How they work, What to expect, and How to style the code."
          />
          <Project_Form
            title="Parable: Menifest your life"
            tech="TypeScript, React Native, Firebase"
            status="Designing"
            type="Mobile"
            description="I believe there are still values to details in life that we
              often forget."
          />
          <Project_Form
            title="AI Consult Chatbot"
            tech="OpenAI API, TypeScript, Nodejs, Express, AWS Lambda, Cloudflare"
            status="Completed"
            type="Web"
            description="This is where anyone can consult to an AI configured to answer your life related issues. I used TypeScript-Next13 frontend and hosted it on Cloudflare, while running my Express backend app on AWS Lambda."
            link="https://lifeconsult-chat-ab.pages.dev/"
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
