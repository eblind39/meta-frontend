

import React from "react"

interface DialogProps {
    children: React.ReactNode
    color: string
}

// Composition
const Dialog = ({ children }: DialogProps) => {
    return (
        <div className="modal">
            { children }
        </div>
    )
}

// Specialization
const ConfirmationDialog = () => {
    return (
        <Dialog color="blue">
            <h1 className="dialog-title">Thanks!</h1>
            <p className="dialog-message">
                We'll process your order in less than 24 hours
            </p>
        </Dialog>
    )
}

export default Dialog;
export { ConfirmationDialog }