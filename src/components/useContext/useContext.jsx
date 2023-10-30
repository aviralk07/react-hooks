import React, { createContext, useContext, useState } from "react";
import "./Apps.css";

// Step 1: Create a context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <h1>Theme Switcher</h1>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  // Step 2: Consume the context using useContext
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
