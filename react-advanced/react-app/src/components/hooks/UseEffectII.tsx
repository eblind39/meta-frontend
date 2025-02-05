import { useEffect, useState } from "react"

const UseEffectII = () => {
    const [toggleMsg, setToggleMsg] = useState<boolean>();

    const clickHandler = () => {
        setToggleMsg(!toggleMsg);
    }

    useEffect(() => {
        document.title = "Initial title";
    }, [])

    useEffect(() => {
        document.title = (toggleMsg ? "Welcome to Little Lemon" : "Using the useEffect hook");
    }, [toggleMsg])

    return (
        <div className="contruncontr-container">
            <h1>Ussing the useEffect hook</h1>
            <button onClick={clickHandler}>Toggle message</button>
            {
                toggleMsg &&
                <h2>Welcome to Little Lemon</h2>
            }
        </div>
    )
}

export default UseEffectII;