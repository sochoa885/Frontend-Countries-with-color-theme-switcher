import { useEffect, useState, useRef, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Container } from "./components/Container";
import { Details } from "./components/Details/Details";
import "./App.css";

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [dataCountries, setDataCountries] = useState([]);const limitData = 15;
  const [countLimit, setCountLimit] = useState(limitData);
  const [filterCountries, setFilterCountries] = useState([]);

  const resetCountLimit = () => {
    setCountLimit(limitData);
  };

  const observer = useRef();
  const lastCountryRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setCountLimit((prev) => {
          return prev + limitData;
        });
      }
    }, []);
    if (node) observer.current.observe(node);
  });

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const requestCountries = async () => {
      console.log("Peticion");
      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((response) => {
          setDataCountries(response);
          setFilterCountries(response);
        })
        .catch((error) => console.log(error));
    };
    requestCountries();
  }, []);

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Container dataCountries={dataCountries} countLimit={countLimit} filterCountries={filterCountries} setFilterCountries={setFilterCountries} resetCountLimit={resetCountLimit} lastCountryRef={lastCountryRef}/>}
          />
          <Route
            path="/country/:id"
            element={<Details dataCountries={dataCountries} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};