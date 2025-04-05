import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import sunIcon from "../../assets/sun.svg";
import moonIcon from "../../assets/moon.svg";

function ThemeToggle() {

    const { myTheme, toggleTheme } = useContext(ThemeContext);

    return (
        <img 
            src={myTheme === "light-theme" ? moonIcon : sunIcon}
            alt="Toggle theme"
            className="theme-icon"
            onClick={toggleTheme}
        />
    )
}

export default ThemeToggle;