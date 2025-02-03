import React from "react";
import LittleLemonMenu from "../components/homepage/LittleLemonMenu"
import DessertstListMaster from "../components/homepage/DessertstListMaster";
import KeysComponent from "../components/homepage/KeysComponent";
import ControlledUncontrolled from "../components/homepage/ControlledUncontrolled";

const HomePage = () => {
    return (
        <React.Fragment>
            <DessertstListMaster />
            <LittleLemonMenu />
            <KeysComponent />
            <ControlledUncontrolled />
        </React.Fragment>
    )
}

export default HomePage;