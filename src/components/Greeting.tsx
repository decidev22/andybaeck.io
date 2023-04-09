import styles from "../style";
import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Hello,", "Kia Ora,", "안녕하세요,", "Good Day,"];
const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

class Greeting extends React.Component {
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
    }, 10000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1,
      });
    }, 150);
  }

  render() {
    return (
      <React.Fragment>
        <span className="font-poppins font-semibold xs:text-[45px] ss:text-[55px] xl:text-[80px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          <ReactTextTransition
            children={texts[this.state.textIndex % texts.length]}
            springConfig={presets.gentle}
            direction="down"
            className="big"
            delay={100}
            inline
          />
        </span>
      </React.Fragment>
    );
  }
}

export default Greeting;
