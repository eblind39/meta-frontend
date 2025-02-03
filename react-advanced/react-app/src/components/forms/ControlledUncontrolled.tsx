import React, { useRef, useState } from "react";
import "../../css/controlled_uncontrolled.css"

const ControlledUncontrolled = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);    
    const [lastName, setLastName] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const firstName: string | undefined = firstNameRef.current?.value;
        const files: FileList | null | undefined = fileInputRef.current?.files;
        console.log(firstName, files);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }

    return (
        <div className="contruncontr-container" style={{ width: "70%" }}>
            <h3>Uncontrolled input</h3>
            <span>The DOM itself maintains the internal state. We get their value by using React ref</span><br />
            <span>File input is always uncontrolled because its value is read-only and can't be set programmatically</span>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={firstNameRef} /><br />
                <input type="file" ref={fileInputRef} /><br />
                <button type="submit">Submit</button>
            </form>

            <h3>Controlled input</h3>
            <span>React maintains the internal state by using a callback and useState</span>
            <form>
                <input 
                    type="text"
                    onChange={handleChange} 
                    value={lastName} /><br />
                <button type="submit">Submit</button>
                <div>{lastName}</div>
            </form>
        </div>
    )
}

export default ControlledUncontrolled;