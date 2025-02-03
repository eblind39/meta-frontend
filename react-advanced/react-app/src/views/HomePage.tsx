import React from "react";
import LittleLemonMenu from "../components/homepage/LittleLemonMenu"
import DessertstListMaster from "../components/homepage/DessertstListMaster";
import KeysComponent from "../components/homepage/KeysComponent";

const HomePage = () => {
    return (
        <React.Fragment>
            <DessertstListMaster />
            <LittleLemonMenu />
            <KeysComponent />
        </React.Fragment>
    )
}

export default HomePage;