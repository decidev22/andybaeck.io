import styles from "../style";
const Starting_Blog = () => {
  return (
    <div>
      <h1 className={`${styles.blogtitle}`}>
        It's not necessarily Blogging...
      </h1>
      <h2 className={`${styles.blogsubtitle}`}>
        It's about organising thoughts and keeping your mind in order.
      </h2>
      <div className={`${styles.blogcontent}`}>
        <p>Hi!</p>
      </div>
    </div>
  );
};

export default Starting_Blog;
