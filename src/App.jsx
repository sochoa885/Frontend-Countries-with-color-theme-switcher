import { useEffect, useState, useRef, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Container } from "./components/Container";
import { Details } from "./components/Details/Details";
import { Footer } from "./components/Footer/Footer";
import "./app.css";

export const App = () => {
  const [theme, setTheme] = useState("light");
  const [dataCountries, setDataCountries] = useState([]);const limitData = 15;
  const [countLimit, setCountLimit] = useState(limitData);
  const [filterCountries, setFilterCountries] = useState([]);
  const [filters, setFilters] = useState({ search: null, region: null });
  const [filtrado, setFiltrado] = useState(false);

  const resetCountLimit = () => {
    setFiltrado(true);
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

  useEffect(() => {
    if(!filtrado) resetCountLimit()
  }, [filterCountries]);
  
  const props = {
    countLimit: countLimit,
    filterCountries: filterCountries,
    lastCountryRef: lastCountryRef,
    propsFiltros: {
      dataCountries: dataCountries,
      setFilterCountries: setFilterCountries,
      filters: filters,
      setFilters: setFilters,
      setFiltrado: setFiltrado
    }
  };
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Container props={props} />
                <Footer/>
              </div>
              }
          />
          <Route
            path="/country/:id"
            element={
              <div>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Details dataCountries={dataCountries} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};