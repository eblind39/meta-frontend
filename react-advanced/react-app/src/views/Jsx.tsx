import React from "react";
import Composition from "../components/jsx/Composition";
import CloneElement from "../components/jsx/CloneElement";
import LabCloneChildren from "../components/jsx/LabCloneChildren";
import LoginForm from "../components/jsx/LoginForm";
import TrackItemPos from "../components/jsx/TrackItemPos";
import Render from "../components/jsx/Render";

const Jsx = () => {
    return (
        <React.Fragment>
            <Composition />
            <CloneElement />
            <LabCloneChildren />
            <LoginForm />
            <TrackItemPos />
            <Render />
        </React.Fragment>
    )
}

export default Jsx;