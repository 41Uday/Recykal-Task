import React from "react";

import Popup from "reactjs-popup";

import ReactPlayer from "react-player";

import { useState } from "react";

import { RxCross1 } from "react-icons/rx";

import { BsPlayCircle } from "react-icons/bs";

import "./index.css";

const SectionEight = () => {
  const [isPlayer, setIsPlayer] = useState(false);

  function playButton() {
    setIsPlayer(true);
  }

  console.log(isPlayer);
  return (
    <div className="">
      <Popup
        modal
        trigger={
          <div className="s-8-container">
            <h1 className="s-8-head-1">How it works?</h1>
            <p className="s-8-para-1">
              {" "}
              Sustainability is at the helm of everything Recykal does, <br />
              watch to know more...
            </p>
            <div className="s-8-img">
              <div className="s-8-img-container">
                <BsPlayCircle className="play-button" onClick={playButton} />
              </div>
            </div>
          </div>
        }
      >
        {(close) => (
          <div className="s-8-video-container">
            <div className="s-8-video-container-v-1">
              <ReactPlayer
                url="https://youtu.be/m7KbmVek1fU"
                controls
                height={750}
                width={1200}
              />
            </div>
            <RxCross1 className="s-8-cross" onClick={() => close()} />
          </div>
        )}
      </Popup>
    </div>
  );
};

export default SectionEight;
