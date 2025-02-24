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

/*
    const enhance = compose(
        // These are both single-argument HOCs
        withMousePosition,
        withURLLocation,
        connect(selector)
    );

    // Enhance is a HOC
    const EnhancedComponent = enhance(WrappedComponent);
*/

// compose(f, g, h) is the same as (...args) => f(g(h(...args)))

/*
const Component = (props) => {
    // This is wrong. Never do this
    const EnhancedComponent = HOC(WrappedComponent);
    return <EnhancedComponent />;
};

// This is the correct way
const EnhancedComponent = HOC(WrappedComponent);
const Component = (props) => {
    return <EnhancedComponent />;
};
*/