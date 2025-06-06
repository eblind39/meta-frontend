import FeedbackForm from "../components/feedback/FeedbackForm";

const Feedback = ()  => {
    const handleSubmit = () => {
        console.log("Feedback submitted");
    }

    return (
        <div className="feedback-container">
            <FeedbackForm onSubmit={handleSubmit} />
        </div>
    )
}

export default Feedback;