import React, { useRef } from "react";

const TextInputWithFocusButton = () => {
    const inputEl = useRef<HTMLInputElement>(null);

    const onButtonClick = () => {
        inputEl.current?.focus();
    }

    return (
        <React.Fragment>
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>Focus the input</button>
        </React.Fragment>
    )
}

export default TextInputWithFocusButton;