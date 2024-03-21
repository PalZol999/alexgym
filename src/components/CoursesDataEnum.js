import React from "react";
import "./CoursesStyles.css";

function CoursesDataEnum(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="img" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <b
        style={{
          paddingTop: "4.5rem",
        }}
      >
        Please register before every courses! There is limit to every class!
      </b>
      <ul
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "20px",
          listStyleType: "none",
        }}
      >
        <li
          style={{
            marginTop: "20px",
          }}
        >
          Start, Crosstraining group class: 10
        </li>
        <li
          style={{
            marginTop: "20px",
          }}
        >
          WL/Gymnastic/CrossCardio max number: 6
        </li>
        <li
          style={{
            marginTop: "20px",
          }}
        >
          HeroWOD courses max number: 12+
        </li>
      </ul>
    </div>
  );
}

export default CoursesDataEnum;
