import React, { useState, useEffect } from "react";
import "../TongleThem/TongleThem.css"; // Create this CSS for theme styling

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme to <body> tag
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      className="btn btn-outline-warning d-flex align-items-center"
      onClick={toggleTheme}
      style={{ height: "40px", fontSize: "14px" }}
    >
      {theme === "light" ? "🌙 Dark" : "☀ Light"}
    </button>
  );
};

export default ToggleTheme;
