import React, { useState } from "react";
import Lottie from "lottie-web-react";
let animationData = require("./icons/heart-splash.json");
const rendererSettings = {
  preserveAspectRatio: "xMinYMin slice",
  viewBoxSize: "50 50 100 100",
};

const LikeComment = () => {
  const [toggle, setToggle] = useState(true);
  const [likeCount, setLikeCount] = useState(0);

  const [playingState, setPlayingState] = useState("stop");

  const handleToggle = () => {
    setToggle(!toggle);
    handleLottie();
    handleLike();
  };

  const handleLottie = () => {
    setPlayingState(playingState === "play" ? "stop" : "play");
  };

  const handleLike = () => {
    let newLikeCount = likeCount;
    likeCount === 1 ? (newLikeCount = 0) : (newLikeCount = 1);
    setLikeCount(newLikeCount);
  };

  const formatLike = () => {
    return likeCount === 0 ? "No likes" : `${likeCount} like`;
  };

  const styles = {
    height: 40,
    width: 40,
  };

  return (
    <>
      <div style={styles} onClick={handleToggle}>
        <Lottie
          options={{
            renderer: "svg",
            loop: false,
            autoplay: false,
            animationData: animationData,
            rendererSettings: rendererSettings,
          }}
          playingState={playingState}
          // speed={speed}
          // direction={direction}
          className="lottie"
        />
      </div>
      <span className="likeCounter">{formatLike()}</span>
    </>
  );
};

export default LikeComment;
