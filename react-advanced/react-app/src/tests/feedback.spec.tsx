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

    it("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
        const score = "3";
        const comment = "The pizza crust was too thick";
        const handleSubmit = jest.fn();

        handleSubmit({
            score,
            comment,
        });

        render(<FeedbackForm onSubmit={handleSubmit} />);

        // You have to write the rest of the test below to make the assertion pass
        const rangeInput = screen.getByLabelText(/Score/i);
        fireEvent.change(rangeInput, { target: { value: score } });

        const textArea = screen.getByLabelText(/Comments:/i);
        fireEvent.change(textArea, { target: { value: comment } });

        const submitButton = screen.getByRole("button", { name: /submit/i });
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledWith(expect.objectContaining({
            score,
            comment,
        }));

        // expect(submitButton).toHaveAttribute("disabled");
    });

    it("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
        const score = "9";
        const comment = "";
        const handleSubmit = jest.fn();

        handleSubmit({
            score,
            comment,
        });
        
        render(<FeedbackForm onSubmit={handleSubmit} />);

        // You have to write the rest of the test below to make the assertion pass
        const rangeInput = screen.getByLabelText(/Score/);
        fireEvent.change(rangeInput, { target: { value: score } });

        const submitButton = screen.getByRole("button", { name: /submit/i });
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledWith({
            score,
            comment,
        });

        expect(submitButton).toHaveAttribute("disabled");
    });
})