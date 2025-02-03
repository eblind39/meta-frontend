import LittleLemonMenu from "../components/homepage/LittleLemonMenu"
import DessertstListMaster from "../components/homepage/DessertstListMaster";
import React from "react";

const HomePage = () => {
    return (
        <React.Fragment>
            <DessertstListMaster />
            <LittleLemonMenu />
        </React.Fragment>
    )
}

export default HomePage;