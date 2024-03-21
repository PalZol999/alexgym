import "./ContactStyles.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser"; /* npm i @emailjs/browser */

function ContactFormEmail() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_cttgvu4", "template_5ewew1e", form.current, {
        publicKey: "BP2rL5lMSbNrukaJ5",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="froms-container">
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" name="user_name" />
        <input placeholder="Email" name="user_email" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4" name="message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactFormEmail;
/*https://www.youtube.com/watch?v=bMq2riFCF90&t=628s*/
