import React from "react";
import "./Home.css";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
const Home = () => {
  const imgSrc =
    "https://images.unsplash.com/photo-1627666259356-03a116b7dde9?q=80&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const title = "Your Journey Your Story";
  const desc = "Choose Your Favourite Destination.";
  return (
    <>
      <Hero
        cName="hero"
        title={title}
        imgSrc={imgSrc}
        desc={desc}
        link="/"
        linkTitle="Travel Plan"
        btnClass="show"
      />
      <Destination />
      <Trip />
    </>
  );
};

export default Home;
