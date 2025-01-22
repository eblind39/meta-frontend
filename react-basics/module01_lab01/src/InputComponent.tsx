import React, { useState } from "react";

const InputComponent = () => {
    const [inputText, setInputText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }

    return (
        <React.Fragment>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setInputText('hello...')}>Reset text</button>
        </React.Fragment>
    )
}

export default InputComponent;