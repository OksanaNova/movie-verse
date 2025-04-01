import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {

    const storedTheme = localStorage.getItem('theme') || "dark";
    const [myTheme, setMyTheme] = useState(storedTheme);

    useEffect(() => {
        localStorage.setItem('theme', myTheme);
        document.body.className = myTheme;
    }, [myTheme])
}

