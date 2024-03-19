import "./AboutStyles.css";
import React from "react";
import { Component } from "react";

class ProgramData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="prg-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
        </div>
      </div>
    );
  }
}

export default ProgramData;
