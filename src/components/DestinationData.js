import React from "react";
import "./Destination.css";

const DestinationData = ({ cName, heading, text, img1, img2 }) => {
  return (
    <div className={cName}>
      <div className="des-text">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="image">
        <img alt="" src={img1} />
        <img alt="" src={img2} />
      </div>
    </div>
  );
};

export default DestinationData;
