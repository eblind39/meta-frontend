import React from "react";

const BirdSounds = () => {
    const bird1: HTMLAudioElement = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
    );

    const bird2: HTMLAudioElement = new Audio(
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
    );

    function toggle1() {
        if (bird1.paused) {
            bird1.play();
        } else {
            bird1.pause();
        }
    }

    function toggle2() {
        if (bird2.paused) {
            bird2.play();
        } else {
            bird2.pause();
        }
    }

    const imgStyle = {position: "absolute", color: "coral", fontWeight: "bold", textAlign: "center", top: "220px"};

    return (
        <React.Fragment>
            <button onClick={toggle1}>
                <figure></figure>
                <span style={imgStyle}>Caspian Tern Bird 1</span>
                <img src="http://www.seppo.net/cartoons/albums/cartoons/nature/birds/birds_lapintiira_en.jpg" alt="caspian 1" width={130} />
            </button>
            <button onClick={toggle2}>
            <span style={imgStyle}>Caspian Tern Bird 2</span>
                <img src="https://c7.alamy.com/comp/2GM7XD4/cute-sternidae-bird-cartoon-vector-illustration-2GM7XD4.jpg" alt="caspian 2" width={130} />
            </button>
        </React.Fragment>
    )
}

export default BirdSounds;