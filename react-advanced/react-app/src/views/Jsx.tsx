import React from "react";
import Composition from "../components/jsx/Composition";
import CloneElement from "../components/jsx/CloneElement";
import LabCloneChildren from "../components/jsx/LabCloneChildren";
import LoginForm from "../components/jsx/LoginForm";

const Jsx = () => {
    return (
        <React.Fragment>
            <Composition />
            <CloneElement />
            <LabCloneChildren />
            <LoginForm />
        </React.Fragment>
    )
}

export default Jsx;