import React from "react";
import Weekends from "./Weekends";
import Workdays from "./Workdays";
import LogicalAndComponent from "./LogicalAndComponent";
import ConditionalTime from "./ConditionalTime";

const WWCurrentMessage = () => {
    const day = (new Date()).getDay();

    return (
        <React.Fragment>
            <LogicalAndComponent />
            {
                day >=1 && day <= 5 ?
                <Workdays /> :
                <Weekends />
            }
            <ConditionalTime />
        </React.Fragment>
    )
}

export default WWCurrentMessage;