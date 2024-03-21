import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import ContactFormEmail from "../components/ContactFormEmail";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Contact us" />
      <div className="program">
        <h2>Our location</h2>
        <p>You can contact us by phone +36 70 777 458</p>
        <p>Our adress: 1113, Budapest, Gyuros utca 7</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.702518724192!2d19.02189047587923!3d47.49570829562928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc265afe9bb9%3A0x983c3e82acfa1af4!2sFlex%20Gym%20Budapest!5e0!3m2!1shu!2shu!4v1711041118831!5m2!1shu!2shu"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Description of iframe content"
        ></iframe>
      </div>
      <ContactFormEmail />
      <Footer />
    </>
  );
}

export default Contact;
