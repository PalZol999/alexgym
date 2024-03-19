import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import TimeTable from "../components/TimeTable";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title=" Our Schedule" />
      <TimeTable />
      <Footer />
    </>
  );
}

export default Service;
