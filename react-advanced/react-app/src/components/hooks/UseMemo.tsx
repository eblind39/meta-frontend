import React, { useContext, useMemo } from "react";

const AppContext = React.createContext({a: "", b: ""});

// A good rule of thumb is to wrap the React component right after your context provider with React.memo
const UseMemo = () => {
    const a = 'hi';
    const b = 'bye';
    const value = useMemo(() => ({a, b}), [a, b]);

    return (
        <AppContext.Provider value={value}>
            <ComponentA />
        </AppContext.Provider>
    )
}

const ComponentA = React.memo(() => <ComponentB />);
const ComponentB = () => <ComponentC />;
const ComponentC = () => {
    const contextValue = useContext(AppContext);
    return <span>{contextValue.a}</span>;
};

export default UseMemo;