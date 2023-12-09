import React from "react";
import "./Trip.css";
const TripData = ({ title, text, image }) => {
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={image} alt="trip pic" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default TripData;
