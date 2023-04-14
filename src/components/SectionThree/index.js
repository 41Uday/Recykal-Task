import React from "react";

import "./index.css";

const SectionThree = () => {
  return (
    <div className="s-3-container">
      <div className="s-3-card-1">
        <h1 className="s-2-head s-3-head-1-1-1">What do we offer?</h1>
        <p className="s-1-para-1 s-3-para-1-1">
          Complete suite of Solutions to help you Achieve your <br />
          Sustainability Targets
        </p>
      </div>
      <h1 className="s-3-head-1">Extended Producer Responsibility</h1>
      <h1 className="s-3-head-2">
        Easy EPR Registration and Fulfillments for your Brand
      </h1>
      <div className="s-3-card-2">
        <div className="s-3-card-2-inner-1">
          <h1 className="s-3-head-3">
            Achieving EPR targets at your fingertips
          </h1>
          <p className="s-3-para-1">
            A digital marketplace for Brands to find <br />
            and transact with PROs and Recyclers <br /> for EPR fulfillments
          </p>
          <img
            src="https://recykal.com/wp-content/uploads/2022/03/Group-35773.png"
            className="s-3-img-1"
            alt="epr"
          />
          <button className="s-1-button s-3-button">Explore EPR</button>
        </div>
        <img
          src="https://recykal.com/wp-content/uploads/2022/03/Group-36206.png"
          alt="epr-graph"
          className="s-3-img-2"
        />
      </div>
    </div>
  );
};

export default SectionThree;
