import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./App.scss";

export const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <div className={theme}>
      <Navbar/>
      <p onClick={toggleTheme}>Hello world</p>
    </div>
  );
};
