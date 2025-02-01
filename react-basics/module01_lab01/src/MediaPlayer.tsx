import React from "react";
import ReactPlayer from "react-player"; // OR
// import ReactPlayer from "react-player/youtube";

const MyVideo = () => {
    const fbVideoURL = 'https://www.facebook.com/facebook/videos/10153231379946729/';

    return (
        <React.Fragment>
            {
                React.createElement(ReactPlayer, {
                    url: "https://www.youtube.com/watch?v=d-VjcaRyo40",
                    controls: true,
                    width: "100%",
                })
            }
            <ReactPlayer
                url={fbVideoURL}
                playing={false}
                volume={0.5} />
        </React.Fragment>
    )
}

export default MyVideo;