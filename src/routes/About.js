import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/about.jpg";
import Footer from "../components/Footer";

import AboutData from "../components/AboutData";
import AboutDataLeft from "../components/AboutDataLeft";
import CF1 from "../assets/CT1.jpg";
import CF2 from "../assets/CF2.jpg";

function About() {
  return (
    <>
      <Navbar />

      <Hero cName="hero-mid" heroImg={AboutImg} title="About the team" />
      <div className="program">
        <h2>Our team</h2>
        <p>
          Our team is made of professional trainers, who have experience in
          teaching group class, personal training and competion{" "}
        </p>
        <AboutData
          className="first-prg"
          heading="Alex"
          text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
          img1={CF2}
        />

        <AboutDataLeft
          className="first-prg-revers"
          heading="Pierre"
          text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
          img1={CF1}
        />

        <AboutData
          className="first-prg"
          heading="Fedra"
          text=" There are many variations of passages of Lorem Ipsum available, but
      the majority have suffered alteration in some form, by injected
      humour, or randomised words which don't look even slightly
      believable. If you are going to use a passage of Lorem Ipsum, you
      need to be sure there isn't anything embarrassing hidden in the
      middle of text."
          img1={CF1}
        />
      </div>
      <Footer />
    </>
  );
}

export default About;
