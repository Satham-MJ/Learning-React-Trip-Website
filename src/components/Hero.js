import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
const Hero = ({ imgSrc, title, desc, link, linkTitle, cName, btnClass }) => {
  return (
    <div className={cName}>
      <img alt="HeroImg" src={imgSrc} />
      <div className="hero-text">
        <h1>{title}</h1>
        <p>{desc}</p>
        <Link to={link} className={btnClass}>
          {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default Hero;
