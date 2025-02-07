import { useRef } from "react";
import useConsoleLog from "../../hooks/useConsoleLog";

const UseRef = () => {
    const formInputRef = useRef<HTMLInputElement | null>(null)
    useConsoleLog("stating App...");

    const focusInput = () => {
        formInputRef.current?.focus();
    }

    return (
        <div className="contruncontr-container">
            <h1>Using useRef to access the underlying DOM</h1>
            <input type="text" ref={formInputRef}/>
            <button onClick={focusInput}>Focus input</button>
        </div>
    )
}

export default UseRef;