import React, { SyntheticEvent } from "react";
import FeedbackType from "../../types/feedback";

interface Props {
    onSubmit: (feedbackobj: FeedbackType) => void;
}

const FeedbackForm = ({ onSubmit }: Props) => {
    const [score, setScore] = React.useState<string>("10");
    const [comment, setComment] = React.useState<string>("");

    const isDisabled = Number(score) < 5 && comment.length <= 10;

    const textAreaPlaceholder = isDisabled
        ? "Please provide a comment explaining why the experience was not satisfactory. Minimum lenght is 10 characters."
        : "Optional feedback";

    const handleSubmit = (evt: SyntheticEvent) => {
        evt.preventDefault();
        onSubmit({score, comment})
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Feedback form</h2>
                    <div className="field">
                        <label htmlFor="score">Score: {score} ⭐</label>
                        <input 
                            name="score"
                            id="score"
                            type="range"
                            value={score}
                            onChange={(evt: SyntheticEvent) => {
                                const target = evt.target as HTMLInputElement;
                                setScore(target.value);
                            }}
                            min="0"
                            max="10" />
                    </div>
                    <div className="field">
                        <label htmlFor="comment">Comments:</label>
                        <textarea 
                            name="comment" 
                            id="comment"
                            placeholder={textAreaPlaceholder}
                            value={comment}
                            onChange={(evt: SyntheticEvent) => {
                                const target = evt.target as HTMLTextAreaElement;
                                setComment(target.value);
                            }}></textarea>
                    </div>
                    <div className="field">
                        <button 
                            type="submit"
                            name="submit"
                            id="submit"
                            disabled={isDisabled}
                            className="btn">Submit</button>
                    </div>
                </fieldset>
            </form>
        </React.Fragment>
    )
}

export default FeedbackForm;