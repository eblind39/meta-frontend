import React from "react";
import Composition from "../components/jsx/Composition";
import CloneElement from "../components/jsx/CloneElement";
import LabCloneChildren from "../components/jsx/LabCloneChildren";

const Jsx = () => {
    return (
        <React.Fragment>
            <Composition />
            <CloneElement />
            <LabCloneChildren />
        </React.Fragment>
    )
}

export default Jsx;