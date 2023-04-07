import styles from "../style";
const Blog_Code_Update = () => {
  return (
    <div className="rounded-lg border border-gray-600 p-4">
      <h1 className={`${styles.blogtitle}`}>Recent changes in my Blog</h1>
      <h2 className={`${styles.blogsubtitle}`}>
        There would be better ways to maintain code and style.
      </h2>

      <div className={`${styles.blogcontent}`}>
        <p className={`${styles.blogcontenttitle}`}>Thinking about design</p>
        <p>
          I am constantly reviewing my UI and functionalities of my blog. First
          thing that I noticed was that my blog lacks consistent design
          patterns. It made my blog look less readable and if I were to place
          myself in a shoes of first time visitor, I didn't know where to put my
          eyes on. I thought I can definitely make some immediate updates on my
          code to fix some of these issues.
        </p>
        <p className={`${styles.blogcontenttitle}`}>
          Changing Blog and Skill tiles
        </p>
        <p>
          Previously, I used styling with my custrom gradient for Blog like
          below.
        </p>
        <div className="mt-2 mb-2 mr-2 p-2 bg-banner-gradient inline-flex rounded-lg w-[100px] h-[100px] items-center">
          {" "}
          Old Example Blog Block{" "}
        </div>
        <div className="mt-2 mb-2 ml-2 p-2 bg-transparent border border-gray-600 rounded-lg inline-flex w-[100px] h-[100px] items-center">
          New Example Blog Block
        </div>
        <p>
          My skill list did not have any styling to it other than scaling on
          hover. I thought both sections, Blog and About Me, lacked in
          consitstent style. Throughout my blog, I am suing a dark, black
          background. Having tiles with strong background color was thought to
          be disturbing readability.
        </p>
        <p>
          Therefore, I have removed all background colors, and made it
          transparent, but instead I gave it a style like below.
        </p>
        <p className={`${styles.blogcontenttitle}`}>Text colors</p>
        <p>Giving more vivid color to my blog title & subtitle.</p>
        <p className="text-[20px] text-blue-300">Previous Title Style</p>
        <p className="text-[20px] bg-gradient-to-r from-sky-500 to-fuchsia-400 text-transparent bg-clip-text font-bold">
          Current Title Style
        </p>
        <p className={`${styles.blogcontenttitle}`}>
          Changing Chat Box Location
        </p>

        <p>
          Previously the chat box and business card button was located on the
          main page. This was not serving best of the blog's purpose of telling
          who I am. While keeping the chat box accessible still, I have placed
          both Business Card and Chat Box feature on the fixed position of right
          bottom.
        </p>
      </div>
      <br />
    </div>
  );
};

export default Blog_Code_Update;
