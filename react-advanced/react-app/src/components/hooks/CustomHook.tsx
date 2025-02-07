import { useState } from "react";
import usePrevious from "../../hooks/usePrevious";

const CustomHook = () => {
    const [day, setDay] = useState<string>("Monday");
    const prevDay = usePrevious(day);

    const getNextDay = () => {
        if (day === "Monday") {
            setDay("Tuesday")
        } else if (day === "Tuesday") {
            setDay("Wednesday")
        } else if (day === "Wednesday") {
            setDay("Thursday")
        } else if (day === "Thursday") {
            setDay("Friday")
        } else if (day === "Friday") {
            setDay("Monday")
        }
    }

    return (
        <div className="contruncontr-container" style={{padding: "40px"}}>
            <h1>
                Today is: {day}<br />
                {
                    prevDay && (
                        <span>Previous work day was: {prevDay}</span>
                    )
                }
            </h1>
            <button onClick={getNextDay}>
            Get next day
            </button>
        </div>
    );
}

export default CustomHook;