import React from "react";
import "./Contact.css";
import AboutImg from "../assets/2.jpg";
import Hero from "../components/Hero";
const Contact = () => {
  const title = "Contact";
  const desc = "";
  return (
    <>
      <Hero
        cName="hero-mid"
        title={title}
        imgSrc={AboutImg}
        desc={desc}
        link="/"
        linkTitle="Travel Plan"
        btnClass="hide"
      />
      <div className="from-container">
        <h1>Send a message to us!</h1>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <textarea placeholder="Message" rows="4"></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
