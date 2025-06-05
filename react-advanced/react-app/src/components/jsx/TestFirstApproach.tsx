import { useEffect, useState } from "react";

const TestFirstApproach = () => {
    const [title, setTitle] = useState<string>("");

    useEffect(() => {
        setTitle("Little Lemon Restaurant");
    }, [])

    return (
        <div className="contruncontr-container">
            <a href="https://littlelemon.com/" className="app-link">{title}</a>
        </div>
    )
}

export default TestFirstApproach;