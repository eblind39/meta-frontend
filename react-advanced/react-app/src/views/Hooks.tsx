import React from "react";
import UseStateObj from "../components/hooks/UseStateObj";
import Goals from "../components/hooks/Goals";
import GiftCard from "../components/hooks/GiftCard";
import UseMemo from "../components/hooks/UseMemo";
import UseEffect from "../components/hooks/UseEffect";
import UseEffectII from "../components/hooks/UseEffectII";
import UseEffectIII from "../components/hooks/UseEffectIII";
import UseEffectIV from "../components/hooks/UseEffectIV";

const Hooks = () => {
    return (
        <React.Fragment>
            <UseStateObj />
            <Goals />
            <GiftCard />
            <UseMemo />
            <UseEffect chatId={77} />
            <UseEffectII />
            <UseEffectIII />
            <UseEffectIV />
        </React.Fragment>
    )
}

export default Hooks;