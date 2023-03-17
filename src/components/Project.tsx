import React from "react";
import styles from "../style";

interface ProjectProps {
  title: string;
  tech: string;
  status: string;
  type: string;
  description: string;
}

const Project_Form: React.FC<ProjectProps> = ({
  title,
  tech,
  status,
  type,
  description,
}) => {
  return (
    <div className="py-2">
      <div className="bg-banner-gradient rounded-[10px] p-5 w-[900px]">
        <div className="text-semibold ss:text-[30px] text-[22px] ss:leading-[50px] leading-[35px]">
          {title}
        </div>
        <div className="flex flex-row">
          <div>
            <div className="w-auto h-auto bg-blue-600 rounded-lg px-1 text-[15px]">
              {type}
            </div>
          </div>
          <div className="text-slate-400 px-2">Technology used: {tech}</div>
          <div className="ml-1 text-green-600">Status: {status}</div>
        </div>
        <div className="mt-4">{description}</div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section
      id="project"
      className={`flex items-start xs:flex-row flex-col ${styles.paddingY} min-h-screen`}
    >
      <div className="text-white font-poppins overflow-x-hidden">
        <h1
          className={`${styles.heading1} flex font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100px] leading-[75px]`}
        >
          {/* <br className="sm:block hidden" /> {"  "} */}
          <span className="text-gradient-blue">Projects</span> {"  "}
        </h1>
        <div className="flex flex-row project-box-ul">
          <div className="flex">
            {/* This parent div, I want to make it so when the length of content is longer than pageview, it makes a horizaontal list, Ib might try to apply one same to skill list */}
            <div className="py-4 ml-14 text-white">
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
                title="Parable - Keep the details in your life"
                tech="TypeScript, React Native, Firebase"
                status="Designing"
                type="Mobile App"
                description="I believe there are still values to details in life that we
              often forget."
              />
            </div>
          </div>
          <div className="flex py-4 ml-14 text-white">
            <Project_Form
              title="Test"
              tech="Tech"
              status="Trying"
              type="Code"
              description="This is description created using a TypeScript Interface"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
