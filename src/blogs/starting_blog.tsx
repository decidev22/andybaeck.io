import styles from "../style";
const Starting_Blog = () => {
  return (
    <div>
      <h1 className={`${styles.blogtitle}`}>It's not just "Blogging"...</h1>
      <h2 className={`${styles.blogsubtitle}`}>
        It's about organising thoughts and keeping my mind in order.
      </h2>
      <br />
      <div className={`${styles.blogcontent}`}>
        <p>
          In the last three months, I have been spending all my afternoon and
          evening in learning and experimenting new technologies I have not
          experienced. As someone who works in a technology company, I am
          exposed to software almost all day. Surprisingly I don't feel tired at
          all. So.. what made me to spend most of my time outside of my regular
          5 hours sleep a day in learning new things?
        </p>
        <br />
        <p>
          I was working remotely from South Korea between last December to early
          Februaray this year, and had chances to meet some great people there.
          Seeing how different part of the world utilises and articulates
          technology and ideas. Having a chance to talk to few people who works
          in the frontier of the industry, I soon found out that the time for a
          new era is just on the verge. I believe we will see a new era of
          technology and revolutionised way of life soon.
        </p>
        <br />
        <p>
          When you truely believe in something, you live it by the action that
          follows your belief. I believe that there is a technical revolution
          happening and I want to be part of it. Three months ago, I didn't know
          how to write a ReatJS web app, and now I have this blog using Vite,
          TypeScript, ReactJS, and FramerMotion. I am also writing an app that
          uses a ChatGPT, and also a React Naitive application for my
          professional career.
        </p>
        <br />
        <p>
          Writing a blog is part of my menifestation of what I believe. To bring
          my dream into reality, I need to keep read, write, and produce new
          software that also revolutionises this world. And that's why I
          starting writing this blog. :)
        </p>
      </div>
      <br />
    </div>
  );
};

export default Starting_Blog;
