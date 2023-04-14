import React from "react";

import "./index.css";

const SectionOne = () => {
  return (
    <div className="section1-container">
      <div className="s-1-card-1">
        <p className="s-1-head-1">Sustainability</p>
        <h1 className="s-1-head-2 ">
          Creating a Circular <br /> Economy through <br /> our Solutions
        </h1>
        <div className="line"></div>
        <p className="s-1-para-1">
          Our End-to-End Innovations provide a robust <br />
          Foundation for your Sustainable Future
        </p>
        <button className="s-1-button">Sustainability through our Lens</button>
      </div>
      <div>
        <h5 className="s-1-last-head">Sustainability Awareness</h5>
        <img
          src="https://recykal.com/wp-content/uploads/2022/02/Students3-1.png.webp"
          alt="sustainability"
          className="s-1-img"
        />
      </div>
    </div>
  );
};

export default SectionOne;
