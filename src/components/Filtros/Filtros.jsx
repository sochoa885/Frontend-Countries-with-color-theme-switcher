import { useState, useEffect } from "react";
import "./Filtros.css";

export const Filtros = ({propsFiltros}) => {
  const { dataCountries, setFilterCountries, filters, setFilters, setFiltrado } = propsFiltros;
  const toggleSearch = (e) => {
    setFiltrado(false);
    if (e.target.value === '') return setFilters((prev) => {
      return {
        ...prev,
        search: null
      };
    });
    setFilters((prev) => {
      return {
        ...prev,
        search: e.target.value
      };
    });
  };

  const toggleRegion = (region) => {
    setFiltrado(false);
    setFilters((prev) => {
      return {
        ...prev,
        region: region
      };
    });
  };

  useEffect(() => {
    if (filters.search !== null && filters.region !== null) {
      setFilterCountries(dataCountries.filter(country => country.name.common.includes(filters.search) && country.region === filters.region));
    } else if (filters.search !== null) {
      setFilterCountries(dataCountries.filter(country => country.name.common.includes(filters.search)));
    } else if (filters.region !== null) {
      setFilterCountries(dataCountries.filter(country => country.region === filters.region));
    } else if (dataCountries.length !== 0) {
      setFilterCountries(dataCountries);
    }
  }, [ filters ]);

  const regions = dataCountries.lenght === 0 ? [] : [...new Set(dataCountries.map(country => country.region))];
  return (
    <div className="filtros">
      <div className="input-search">
        <i className="search-icon"></i>
        <input autoComplete="off" className="search" type="text" id="search" placeholder="Search for a country..." onChange={toggleSearch} value={filters.search != null ? filters.search : ""}/>
      </div>
      <ComboRegion regions={regions} toggleRegion={toggleRegion}/>
    </div>
  );
};


const ComboRegion = (props) => {
  const { regions, toggleRegion } = props;
  const [ estadoComboRegion, setEstadoComboRegion ] = useState(false)
  const [ regionSelected, setRegionSelected ] = useState("Filter by Region");
  const toggleEstadoComboRegion = () => {
    setEstadoComboRegion((current) => !current);
  };
  const toggleRegionSelected = (region) => {
    setRegionSelected(region);
    toggleRegion(region);
    setEstadoComboRegion((current) => !current);
  }
  return (
    <div className="div-region">
      <div className="select-box">
        <div className={`options-container ${estadoComboRegion ? 'active' : ''}`}>
          {regions.map((region, index) => {
            return (
              <div className="option" key={index} onClick={() => toggleRegionSelected(region)}>
                <input type="radio" className="radio" id={region} name="regions" />
                <label htmlFor={region}>{region}</label>
              </div>
            );
          })}
        </div>
        <div className="selected" onClick={toggleEstadoComboRegion}>
          <p className="label-selected">{regionSelected}</p>
        </div>
      </div>
    </div>
  );
};