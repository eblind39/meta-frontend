import React from "react";

interface ButtonProps {
    children: React.ReactNode
    backgroundColor: string
}

const Button = ({ children, backgroundColor }: ButtonProps) => {
    return <div style={{ backgroundColor }}>
        { children }
    </div>
}

interface AlertProps {
    children: React.ReactNode
}

const Alert = ({ children }: AlertProps) => {
    return (
        <React.Fragment>
            <div className="overlay" />
            <div className="alert">
                { children }
            </div>
        </React.Fragment>
    )
}

const Composition = () => {
    return (
        <div className="composition contruncontr-container">
            <header>Little Lemon Restaurant 🍕</header>
            <Alert>
                <h4>Delete Account</h4>
                <p>
                    Are you sure want to proceed? You will miss all your delicious recipes!
                </p>
                <Button backgroundColor="orange">
                    <button>Cancel</button>
                    <button>Delete</button>
                </Button>
            </Alert>
        </div>
    )
}

export default Composition;
export { Button, Alert }