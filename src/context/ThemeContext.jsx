import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const storedTheme = localStorage.getItem('theme') || "dark-theme";
    const [myTheme, setMyTheme] = useState(storedTheme);

    useEffect(() => {
        localStorage.setItem('theme', myTheme);
        document.body.className = myTheme;
    }, [myTheme]);

    const toggleTheme = () => {
        setMyTheme((currentTheme) => (currentTheme === "light-theme" ? "dark-theme" : "light-theme"))
    };

    return (
        <ThemeContext.Provider value={{ myTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

