import React from "react";
import "./Service.css";
import AboutImg from "../assets/night.jpg";
import Hero from "../components/Hero";
import Trip from "../components/Trip";
const Service = () => {
  const title = "Service";
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
      <Trip />
    </>
  );
};

export default Service;
