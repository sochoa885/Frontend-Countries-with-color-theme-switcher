import { useEffect, useState, useRef, useCallback } from "react";
import { Filtros } from "./Filtros/Filtros";
import { Card } from "./Card/Card";
import "./Container.css";

export const Container = () => {
  const limitData = 15;
  const [countLimit, setCountLimit] = useState(limitData);
  const [dataCountries, setDataCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);

  useEffect(() => {
    requestCountries(setDataCountries, setFilterCountries);
  }, []);
  
  useEffect(() => {
    console.log(dataCountries)
  }, [dataCountries]);

  const resetCountLimit = () => {
    setCountLimit(limitData);
  };

  const observer = useRef();
  const lastCountryRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setCountLimit((prev) => {
          return prev + limitData;
        })
      }
    }, []);
    if (node) observer.current.observe(node);
  });

  return (
    <div className="main">
      <Filtros dataCountries={dataCountries} setFilterCountries={setFilterCountries} resetCountLimit={resetCountLimit} />
      <div className="cards-container">
        {filterCountries.slice(0, countLimit).map((country, index) => {
          if (countLimit === index + 1) {
            return (
              <Card index={index} lastCountryRef={lastCountryRef} country={country} />
            );
          } else {
            return (
              <Card index={index} lastCountryRef={null} country={country}/>
            );
          }
        })}
      </div>
    </div>
  );
};

const requestCountries = async (setDataCountries, setFilterCountries) => {
  console.log("Peticion")
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(response => {
      setDataCountries(response);
      setFilterCountries(response);
    })
    .catch(error => console.log(error));
};