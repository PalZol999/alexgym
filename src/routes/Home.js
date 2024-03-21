import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/home.jpg";
import Program from "../components/Program";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Welcome to AlexTraining!"
        text="Our gym is dedicate to offer you the best sport experience possible within a exceptional community.
        You can learn the basis of good movements, mixed with hight intensity sessions.
        From the beginner to the advance athlete, our varity of courese offer you the possbilit to improve in any field or any goals that you have."
        buttonText="Sign in"
        url="/contact"
        btnClass="show"
      />
      <Program />
      <Courses />
      <Footer />
    </>
  );
}

export default Home;
