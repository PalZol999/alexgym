import React from "react"; /* destination */
import "./ProgramStyles.css";
import ProgramData from "./ProgramData";
import CF1 from "../assets/CT1.jpg";
import CF2 from "../assets/CF2.jpg";
import WL from "../assets/WL.jpg";
import Gym from "../assets/gym.jpg";

function Program() {
  return (
    <div className="program">
      <h1>Start to move today!</h1>
      <h2>From the beginner to the advanced...</h2>

      <ProgramData
        className="first-prg"
        heading="CrossTraining"
        text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
        img1={CF1}
        img2={CF2}
      />

      <ProgramData
        className="first-prg-revers"
        heading="WeightLifting and Gymnastics"
        text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
        img1={WL}
        img2={Gym}
      />
    </div>
  );
}

export default Program;
