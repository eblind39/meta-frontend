import { SyntheticEvent, useState } from "react";
import "../../css/controlled_uncontrolled.css";

const ControlledForm = () => {
    const [score, setScore] = useState<string>("10");
    const [comment, setComment] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (Number(score) <= 5 && comment.length <= 10) {
            alert("Please provide a comment explaining why the experience was poor.");
            return;
        }

        console.log(`%cForm submitted! ${score} ${comment}`, "color: lightcoral; font-size: 1.5em");
        setComment("");
        setScore("10");
    }

    return (
        <div className="contruncontr-container">
            <form onSubmit={handleSubmit}>
                <h2>Feedback Form</h2>
                <div className="field-form">
                    <label htmlFor="score">Score: {score}⭐</label><br />
                    <input 
                        style={{width: "100%"}}
                        type="range" 
                        name="score" 
                        id="score"
                        min="0"
                        max="10"
                        value={score}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            const {name, value} = e.target;
                            setScore(value);
                            console.log(name, value);
                        }} />
                </div>
                <div className="field-form">
                    <label htmlFor="comment">Comment: </label><br />
                    <textarea
                        style={{width: "100%"}}
                        rows={5}
                        value={comment}
                        onChange={(e: SyntheticEvent) => {
                            const {value} = e.target as HTMLTextAreaElement;
                            setComment(value);
                        }} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ControlledForm;