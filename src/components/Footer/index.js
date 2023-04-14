import React from "react";

import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";

import { FiInstagram } from "react-icons/fi";

import "./index.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div>
          {/* <h4>Products</h4> */}
          <ul className="f-l-container-1">
            <li className="f-l-li-2">Products</li>
            <li className="f-l-li">Marketplace</li>
            <li className="f-l-li">Sustainability</li>
            <li className="f-l-li">DRS</li>
            <li className="f-l-li">EPR</li>
            <li className="f-l-li">Smart Center</li>
          </ul>
        </div>
        <div>
          {/* <h4>Products</h4> */}
          <ul className="f-l-container-2">
            <li className="f-l-li-2 f-l-li-2-2">Company</li>
            <li className="f-l-li f-l-li-2-2-1">About us</li>
            <li className="f-l-li f-l-li-2-2-1">Life at Recykal</li>
            <li className="f-l-li f-l-li-2-2-1">Resources</li>
            <li className="f-l-li f-l-li-2-2-1">Contact Us</li>
            <li className="f-l-li f-l-li-2-2-1">
              Support@recykal.com
              <br />
              +91 779 999 6255
            </li>
          </ul>
        </div>
        <div className="f-last-card">
          <p className="f-l-li f-l-li-2-2-1">For the latest deals & </p>
          <p className="f-l-li f-l-li-2-2-1">updates, Stay tuned to</p>
          <div className="f-circle-container">
            <div className="f-circle">
              <BsFacebook />
            </div>
            <div className="f-circle">
              <FiInstagram />
            </div>
            <div className="f-circle">
              <BsTwitter />
            </div>
            <div className="f-circle">
              <BsYoutube />
            </div>
            <div className="f-circle">
              <BsLinkedin />
            </div>
          </div>
        </div>
      </div>
      <div className="f-last-container">
        <p className="f-last-para">
          {" "}
          Privacy Policy | Terms & Conditions © Rapidue Technologies Pvt. Ltd.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
