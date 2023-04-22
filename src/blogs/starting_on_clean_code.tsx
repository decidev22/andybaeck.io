import styles from "../style";

const Starting_Clean_Code = () => {
  return (
    <div className="rounded-lg border border-gray-600 p-4">
      <h1 className={`${styles.blogtitle}`}>
        Applying clean code to my project
      </h1>
      <h2 className={`${styles.blogsubtitle}`}>
        Next13 and using App directory for the first time
      </h2>

      <div className={`${styles.blogcontent}`}>
        <p className={`${styles.blogcontenttitle}`}>
          Split all the requirements
        </p>
        <p>
          Major issue I had with my previous projects were that it is
          working great until the plan changes. All of a sudeen I want
          to move components from here to there. Opps, that's not
          really possible without re-writing many lines of code, and
          it's starting to cause a headache because some components
          are not very well defined and will cause even more issues
          when you move it around. For me, I had this issue with
          Firebase Auth and Provider on my TalentPark project.
        </p>
        <br />
        <p className={`${styles.blogcontenttitle}`}>
          So, this time, I am spliting all my code into modular
          components.
        </p>
        <p>
          It was not easy to see how necessary this is before facing
          so many issues with, well, unclean code. My current project
          with DevNomad uses App directory of Next13. (Yes, I am
          trying it out!) First thing I had to figure out was that I
          needed to define which component is client side. (without
          'use client'; your code won't run!) Separating all my code
          between inputs, modals, components, navbar, and providers
          (this is new to me, but it helped me avoid this issue of
          having to use the useEffect and needing a parent element by
          making a component and just add 'use client'; and return the
          component name as an element, just like fractions.)
        </p>
        <br />
        <p>
          Anyway, now, by splitting all my codes, it actually takes a
          lot longer to make sure that my codes are working as
          expected. Creating interface on each file and making sure
          that I have not made a typo is actually taking quite some
          effort! (Why consistent variable names are important?)
        </p>
        <p>
          Once I have made 'Menu' component that is a base component
          for all menues. Then creating 'Main Menu', and other menus
          based off it with different styles has helped the
          maintainability of the code to be far easier than ever. It
          seems to take longer to write at first, but the debugging
          process was a breeze. I can logically trace down where I
          might have got wrong. This is how I found that I made a dumb
          mistake of not including a couple of lines of code just
          before. If I haven't made it as modular as it is now, I
          would have took far longer to figure out just where my code
          isn't working. (The more I get into complex models,
          console.log isn't going to solve all issues!)
        </p>
        <br />
        <p className={`${styles.blogcontenttitle}`}>My plan now</p>
        <p>
          I am planning to use Prisma and MongoDB, and having this
          idea (I am yet proficient in writing schemas for DB) applied
          on my DB design is going to be my main interest for the next
          few days.
        </p>
        <br />
        <p>
          There are a lot I can learn and utilise, but I have never
          felt I made so much progress in a month time than before!
          And opps. it's 4:24AM. I definitely love programming.
        </p>
      </div>
    </div>
  );
};

export default Starting_Clean_Code;
