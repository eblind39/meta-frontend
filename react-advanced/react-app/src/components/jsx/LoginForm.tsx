import React from "react";
import type { ButtonHTMLAttributes } from 'react';

// spread props
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeVariant: "primary" | "secondary" | undefined
    children: React.ReactNode
    onClick: () => void
}

const Button = ({ typeVariant, children, ...buttonProps }: ButtonProps) => {
    const className = (typeVariant === "primary" ? "PrimaryButton" : "SecondaryButton");

    return (
        <button className={`button ${className}`} {...buttonProps}>
            { children }
        </button>
    )
}

interface LoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    typeVariant: "primary" | "secondary" | undefined
    children: React.ReactNode
    onClick: () => void
}

const LoginButton = ({ typeVariant, children, ...buttonProps }: LoginButtonProps) => {
    return (
        <Button
            typeVariant="secondary"
            { ...buttonProps }
            onClick={() => {
                alert("Logging in!")
            }}>
                {children}
        </Button>
    )
}

const LoginForm = () => {
    return (
        <div className="login-form contruncontr-container">
            <header className="login-form-header">Little Lemon Restaurant 🍕</header>
            <Button typeVariant="primary" onClick={() => alert("Signing up!")}>
                Sign up
            </Button>
            <LoginButton typeVariant="secondary" onClick={() => alert("Signing up!")}>
                Login
            </LoginButton>
        </div>
    )
}

export default LoginForm;