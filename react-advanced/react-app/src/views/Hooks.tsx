import React from "react";
import UseStateObj from "../components/hooks/UseStateObj";
import Goals from "../components/hooks/Goals";
import GiftCard from "../components/hooks/GiftCard";

const Hooks = () => {
    return (
        <React.Fragment>
            <UseStateObj />
            <Goals />
            <GiftCard />
        </React.Fragment>
    )
}

export default Hooks;