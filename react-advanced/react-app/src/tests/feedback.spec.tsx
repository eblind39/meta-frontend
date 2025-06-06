import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "../components/feedback/FeedbackForm";

describe("FeedbackForm Component", () => {
    it("Submission is disabled if score is lower than 5 and there is no comment", () => {
        const handleSubmit = jest.fn();
        render(<FeedbackForm onSubmit={handleSubmit} />);

        const rangeInput = screen.getByLabelText(/Score/);
        fireEvent.change(rangeInput, { target: { value: "4" } });

        const submitButton = screen.getByRole("button", { name: /submit/i });
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    })
})