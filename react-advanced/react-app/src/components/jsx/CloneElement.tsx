import React from "react";

interface RowProps {
    children: React.ReactNode
    spacing: number
}

const Row = ({ children, spacing }: RowProps) => {

    const childStyle = {
        marginLeft: `${spacing}px`,
    }

    return (
        <div className="row">
            { React.Children.map(children, (child, index) => {
                return React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, {
                    style: {
                        ...(child.props as React.HTMLProps<HTMLElement>).style,
                        ...(index > 0 ? childStyle : {})
                    },
                }) : child;
            }) }
        </div>
    )
}

const CloneElement = () => {
    return (
        <div className="clone-element contruncontr-container">
            <Row spacing={32}>
                <span>Pizza Margarita</span>
                <span>2</span>
                <span>30$</span>
                <span>18:30</span>
                <span>John</span>
            </Row>
        </div>
    )
}

export default CloneElement;