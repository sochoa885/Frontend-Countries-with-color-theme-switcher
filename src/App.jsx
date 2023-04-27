import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";
import { Container } from "./components/container";


export const App = () => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Container/>
    </div>
  );
};
