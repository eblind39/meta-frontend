// import ReactPlayer from "react-player"; // OR
import React from "react";
import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
    return React.createElement(ReactPlayer, {
        url: "https://www.youtube.com/watch?v=d-VjcaRyo40",
        controls: true,
        width: "100%",
    });
}

export default MyVideo;