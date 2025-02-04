import React, { useContext, useState } from "react";

const ThemeContext = React.createContext({
        theme: '',
        toggleTheme: () => {}
    });

interface Props {
    children: React.ReactNode
}

const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<string>("light");

    return (
        <ThemeContext.Provider
            value={{
            theme,
            toggleTheme: () => setTheme(theme === 'light' ? 'dark' : 'light')
        }}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;