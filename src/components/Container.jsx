import { Link } from "react-router-dom";
import { Filtros } from "./Filtros/Filtros";
import { Card } from "./Card/Card";
import "./Container.css";

export const Container = ({props}) => {
  const { countLimit, filterCountries, lastCountryRef, propsFiltros } = props;
  return (
    <div className="main">
      <Filtros
        propsFiltros={propsFiltros}
      />
      <div className="cards-container">
        {filterCountries.slice(0, countLimit).map((country, index) => {
          if (countLimit === index + 1) {
            return (
              <Link to={`/country/${country.name.common}`} className="country-link" key={index}>
                <Card
                  lastCountryRef={lastCountryRef}
                  country={country}
                />
              </Link>
            );
          } else {
            return (
              <Link to={`/country/${country.name.common}`} className="country-link" key={index}>
                <Card
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
