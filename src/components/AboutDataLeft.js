import "./AboutStlyesLeft.css";
import React from "react";
import { Component } from "react";

class ProgramDataLeft extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="prg-texts">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="images">
          <img alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default ProgramDataLeft;
