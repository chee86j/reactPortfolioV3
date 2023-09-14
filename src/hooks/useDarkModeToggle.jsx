import { useState } from "react";
import SunIcon from "../assets/sun.png";
import MoonIcon from "../assets/moon.png";

function useDarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className={`dark-mode-container ${isDarkMode ? "dark" : "light"}`}>
      <input
        type="checkbox"
        id="darkmode-toggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
      <label htmlFor="darkmode-toggle">
        {isDarkMode ? (
          <img src={MoonIcon} alt="Moon Icon" className="moon" />
        ) : (
          <img src={SunIcon} alt="Sun Icon" className="sun" />
        )}
      </label>
    </div>
  );
}

export default useDarkModeToggle;
