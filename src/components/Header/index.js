import React from "react";

import { Link } from "react-router-dom";

import { IoMdArrowDropdown } from "react-icons/io";

import "./index.css";

const Header = () => {
  return (
    <nav className="header-container">
      <Link to="/">
        <img
          src="https://recykal.com/wp-content/uploads/2022/02/Recykal-Logo_130x30-pix.png"
          className="header-img-1"
          alt="logo"
        />
      </Link>
      {/* <p className="header-para-1">For Brands</p> */}
      <div className="dropdown">
        <button className="dropbtn header-para-1">
          For Brands
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        <div className="dropdown-content">
          <a href="#">Sustainability Suite</a>
          <a href="#">Plastic Neutrality</a>
          <a href="#">Takeback Solutions</a>
          <a href="#">Sustainability Awareness</a>
          <a href="#">Industrial Waste</a>
          <a href="#">IEC Awareness Programs</a>
          <a href="#">EPR</a>
        </div>
      </div>

      <div className="dropdown">
        {/* <div className="header-container-drop-1"> */}
        <button className="dropbtn header-para-1 header-container-drop-1 h-r-1">
          For Recyclers{" "}
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        {/* </div> */}

        <div className="dropdown-content">
          <a href="#">Marketplace</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn header-para-1 h-r-1">
          For Govt. Agencies
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        <div className="dropdown-content">
          <a href="#">DRS</a>
          <a href="#">Smart Center</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn header-para-1">
          About Us
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        <div className="dropdown-content">
          <a href="#">Recykal Story</a>
          <a href="#">Life at Recykal</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="dropbtn header-para-1">
          Resources
          <span>
            <IoMdArrowDropdown />
          </span>
        </button>
        <div className="dropdown-content">
          <a href="#">All</a>
          <a href="#">Blogs</a>
          <a href="#">Media</a>
          <a href="#">Downloads</a>
        </div>
      </div>

      {/* <p className="header-para-1">For Recyclers</p>
      <p className="header-para-1">For Govt. Agencies</p>
      <p className="header-para-1">For Brands</p>
      <p className="header-para-1">For Brands</p> */}
      <Link to="/db" className="db-class">
        <p className="header-para-1" onClick={() => console.log("clicked")}>
          Contact Us details
        </p>
      </Link>
      <Link to="/contact">
        <button className="header-button">Contact Us</button>
      </Link>
    </nav>
  );
};

export default Header;
