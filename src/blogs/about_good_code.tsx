import styles from "../style";

const About_GoodCode = () => {
  return (
    <div className="rounded-lg border border-gray-600 p-4">
      <h1 className={`${styles.blogtitle}`}>
        My learnings from last two projects
      </h1>
      <h2 className={`${styles.blogsubtitle}`}>
        Read the document, and write out your requirements before writing the
        code.
      </h2>

      <div className={`${styles.blogcontent}`}>
        <p className={`${styles.blogcontenttitle}`}>
          Knowing my tools and frameworks
        </p>
        <p>
          As part of learning the NextJS framework, I had a reapting issue over
          my last two projects, where I fail to understand the purpose of
          framework (NextJS) and tool (Firebase Auth) and keep having to go back
          to documents to figure out why my code would not run or why I
          shouldn't really be coding in such manner, such as folder routing,
          managing user data and more.
        </p>
        <br />
        <p>
          From my recent grinding of spending almost all my time outside of my
          day-job into debugging my code and learning new things, reading
          documents and tracking down where I went wrong wasn't so hard. The
          hard part was where I constantly had to re-write my code or refactor
          it. Adding more maintainable code, using more Interfaces to maintain
          repeating elements.
        </p>
        <br />
        <p>
          Purhaps it's just an imposter syndrom of keep learning new frameworks
          and new technologies I am not familiar of, but I keep had this feeling
          of not knowing all the knowledge before writing my project. However, I
          definitely felt an urge to learn core features before using the
          framework. Purhaps I will make a pilot project when I am starting to
          use a new framework or tool. I can definitely feel that I am spotting
          erorrs earlier than before.
        </p>
        <p className={`${styles.blogcontenttitle}`}>So what now?</p>
        <p>
          Until now, when I had a spark of idea I just started coding it right
          away and adding features as I went on. It was partially because I
          wanted to quickly learn new frameworks and get used to it, but also
          because I had experiences where I planned out and never started on
          some projects. Thinking about it now, I never really started on those
          projects because I was afraid I will encounter so many things I don't
          know about. Now, I have already made myself used to seeing unknown
          errors and figuring out solutions for multiple projects, I am now
          ready to get back to 'planning'.
        </p>
        <br />
        <p>
          I am now going to fully utilise Figma for wireframing and Miro for
          logic diagram, to make sure I have a consistent logic going on and end
          goal for the product I want to build. Having a logic board and
          implementing a Test Driven Developement using Jest. (I have done this
          when I did my project on learning NestJS).
        </p>
      </div>
    </div>
  );
};

export default About_GoodCode;
