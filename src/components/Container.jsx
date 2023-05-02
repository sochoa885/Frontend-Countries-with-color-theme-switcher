import { Link } from "react-router-dom";
import { Filtros } from "./Filtros/Filtros";
import { Card } from "./Card/Card";
import "./Container.css";

export const Container = (props) => {
  const { dataCountries, countLimit, filterCountries, setFilterCountries, resetCountLimit, lastCountryRef } = props;
  return (
    <div className="main">
      <Filtros
        dataCountries={dataCountries}
        setFilterCountries={setFilterCountries}
        resetCountLimit={resetCountLimit}
      />
      <div className="cards-container">
        {filterCountries.slice(0, countLimit).map((country, index) => {
          if (countLimit === index + 1) {
            return (
              <Link to={`/country/${country.name.common}`} className="country-link">
                <Card
                  key={index}
                  lastCountryRef={lastCountryRef}
                  country={country}
                />
              </Link>
            );
          } else {
            return (
              <Link to={`/country/${country.name.common}`} className="country-link">
                <Card
                  key={index}
                  lastCountryRef={null}
                  country={country}
                />
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
