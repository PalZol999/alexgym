import React from "react"; /* Trip*/
import "./CoursesStyles.css";
import CoursesData from "./CoursesData";
import PT from "../assets/persotrain.jpg";
import Grpcls from "../assets/courses.jpg";
import Open from "../assets/opengym.jpg";

/* personal training - group courses - open gym*/

function Courses() {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <p>You can join us anytime!</p>

      <div className="coursescard">
        <CoursesData
          image={Grpcls}
          heading="Group Class"
          text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
        />
        <CoursesData
          image={PT}
          heading="Personal training"
          text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
        />

        <CoursesData
          image={Open}
          heading="Open Gym"
          text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
        />
      </div>
    </div>
  );
}

export default Courses;
