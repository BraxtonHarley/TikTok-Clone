import React, { useRef } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);
  const onVideoPress = () => {
    videoRef.current.play();
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        ref={videoRef}
        onClick={onVideoPress}
        src="https://www.tiktok.com/@lone.wolfy/video/6873118144106646785?lang=en"
      ></video>
    </div>
  );
}

export default Video;
