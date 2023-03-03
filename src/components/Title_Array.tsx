// import { useTransition, animated } from "@react-spring/web";
import Title_Animation from "./Title_Animation";
import React from "react";

interface Props {}
const Title_Array: React.FC<Props> = () => {
  const title = "Andy Baeck's Tech Blog".split("");
  return (
    <div className="bg-primary w-full overflow-hidden font-poppin mt-3">
      {title.map((letter, index) => {
        return (
          <Title_Animation key={index}>
            {letter === " " ? "\u00A0" : letter}
          </Title_Animation>
        );
      })}
    </div>
  );
};

export default Title_Array;
