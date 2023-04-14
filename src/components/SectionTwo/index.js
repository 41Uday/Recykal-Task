import React from "react";

import "./index.css";

const SectionTwo = () => {
  return (
    <div className="section-2-container">
      <h1 className="s-2-head">Partners who believe in our Solutions..</h1>
      <marquee
        scrollamount="10"
        direction="right"
        className="marquee-container"
      >
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Our-Partners-Logos-Pidilite-q364tya2woff2kwtmgt9x0o01qzsy9lxyfq8h29efw.png"
          alt="brand"
          className="s-2-img"
        />
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Our-Partners-Logos-Parle-Agro-q364tya2woff2kwtmgt9x0o01qzsy9lxyfq8h29efw.png"
          alt="brand"
          className="s-2-img"
        />
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Group-36201-1-q361i7m8agig2uuatpi7a8g3sp6iec8wtrxhm3sv30.png"
          alt="brand"
          className="s-2-img"
        />
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Group-36202-q361i7m8agig2uuatpi7a8g3sp6iec8wtrxhm3sv30.png"
          alt="brand"
          className="s-2-img"
        />
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Group-36203-q361i8k2hajqegsxo7wtuq7ke31vm1cn5wkz3drgws.png"
          alt="brand"
          className="s-2-img"
        />
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Group-36204-q361i9hwo4l0q2rkiqbgf7z0zgx8tqgdi18gknq2qk.png"
          alt="brand"
          className="s-2-img"
        />
        <img
          src="https://recykal.com/wp-content/uploads/elementor/thumbs/Group-36205-q361i9hwo4l0q2rkiqbgf7z0zgx8tqgdi18gknq2qk.png"
          alt="brand"
          className="s-2-img"
        />
      </marquee>
      <div className="anchor-container">
        <a href="#" className="s-2-anchor-element">
          ...and many more
        </a>
      </div>
    </div>
  );
};

export default SectionTwo;
