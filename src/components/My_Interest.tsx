import styles from "../style";
import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = [
  "BackEnd Engineering",
  "Artificial Intelligence",
  "FrontEnd Engineering",
  "Problem Solving",
  "Software Innovation",
  "Data Science",
  "Security Engineering",
];

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

class My_Interest extends React.Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
    customIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1,
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <ReactTextTransition
        children={texts[this.state.textIndex % texts.length]}
        springConfig={presets.stiff}
        className="relative inline-flex h-auto flex-wrap text-5xl font-extrabold bg-gradient-to-r from-blue-500 to-violet-400 xs:text-[60px] ss:text-[65px] text-white w-full xs:!whitespace-normal sm:!whitespace-nowrap"
        delay={100}
        inline
      />
    );
  }
}

export default My_Interest;
