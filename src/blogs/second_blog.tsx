import styles from "../style";
import { render } from "react-dom";
import AceEditor from "react-ace";
import { useState } from "react";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/theme-monokai";

const Second_Blog = () => {
  const [code, setCode] = useState<string>(
    "const message = `this is basic message`;"
  );
  const hello_word =
    "const message = `Hello World!`;" +
    "\n" +
    "console.log(message);" +
    "\n" +
    ">> Hello World!";

  const hello_low_err =
    "const message = `Hello World!`;" +
    "\n" +
    "message.toLowerCase()" +
    "\n" +
    ">> Hello World!";
  return (
    <div>
      <h1 className={`${styles.blogtitle}`}>
        Important concepts in TypeScript
      </h1>
      <h2 className={`${styles.blogsubtitle}`}>Type Type Type</h2>
      <br />
      <div className={`${styles.blogcontent}`}>
        <p className={`${styles.blogcontenttitle}`}>
          After installing TypeScript
        </p>
        <p>Let's try print Hello World!</p>

        <AceEditor
          mode="typescript"
          theme="monokai"
          value={hello_word}
          onChange={(newCode) => setCode(newCode)}
          height="50px"
          annotations={[
            {
              row: 0,
              column: 0,
              text: "This looks exactly like JavaScript!",
              type: "information",
            },
          ]}
        />

        <br />
        <p>Now let's try to make message all lowercase!</p>
        <AceEditor
          mode="typescript"
          theme="monokai"
          value={hello_low_err}
          onChange={(newCode) => setCode(newCode)}
          height="50px"
          annotations={[
            {
              row: 1,
              column: 0,
              text:
                "const message: `Hello World!`" +
                "\n" +
                "This expression is not callable." +
                "\n" +
                "Type 'String' has no call signatures.",
              type: "error",
            },
          ]}
        />

        <p className={`${styles.blogcontenttitle}`}></p>
      </div>
    </div>
  );
};

export default Second_Blog;
