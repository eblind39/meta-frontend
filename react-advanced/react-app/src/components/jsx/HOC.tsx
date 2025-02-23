import React from "react";

interface mousePosition {
    x: number
    y: number
}

interface WrappedComponentProps {
    injectedProp: { mousePosition: mousePosition }
    originalProps: React.HTMLProps<HTMLElement>
}

const WrappedComponent = ({ injectedProp }: WrappedComponentProps) => {
    return <div {...injectedProp}>Wrapped Component</div>
}

const HOC = () => {
    const injectedProp = {
        mousePosition: {
            x: 10,
            y: 10,
        }
    }

    const originalProps = {}; // Define originalProps
    return <WrappedComponent originalProps={originalProps} injectedProp={injectedProp} {...originalProps} />
}

export default HOC;

// best practices
/*
-- under the hood

"currying" - programming pattern
const EnhancedComponent = connect(selector, actions)(WrappedComponent);

const HOC = connect(selector, actions);
const EnhancedComponent = HOC(WrappedComponent);
*/