import { useParams, useNavigate, Link } from "react-router-dom";
import "./Details.css";

export const Details = ({ dataCountries }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const country = dataCountries.find(contry => contry.name.common === id);
  if (!country) return <></>
  return (
    <div className="container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <span className="back-icon"></span>
        <span className="back-text">Back</span>
      </button>
      <div className="country-details">
        <div className="country-flag" style={{ backgroundImage: `url(${country.flags.png})` }}></div>
        <div>
          <div className="name-country">
            {country.name.common}
          </div>
          <div className="country-information">
            <div>
              <div className="data">
                <label htmlFor="nativeName" className="title">Native Name:</label><p className='text' id="nativeName">{country.name.nativeName ? country.name.nativeName[Object.keys(country.name.nativeName)[0]].common : country.name.common}</p>
              </div>
              <div className="data">
                <label htmlFor="population" className="title">Population:</label><p className='text' id="population">{country.population}</p>
              </div>
              <div className="data">
                <label htmlFor="region" className="title">Region:</label><p className='text' id="region">{country.region}</p>
              </div>
              <div className="data">
                <label htmlFor="subRegion" className="title">Sub Region:</label><p className='text' id="subRegion">{country.subregion}</p>
              </div>
              <div className="data">
                <label htmlFor="capital" className="title">Capital:</label><p className='text' id="capital">{country.capital ? country.capital.join(", ") : ""}</p>
              </div>
            </div>
            <div>
              <div className="data">
                <label htmlFor="levelDomain" className="title">Top Level Domain:</label><p className='text' id="levelDomain">{country.tld[0]}</p>
              </div>
              <div className="data">
                <label htmlFor="currencies" className="title">Currencies:</label><p className='text' id="currencies">{country.currencies ? Object.keys(country.currencies).map(key => country.currencies[key].name).join(", ") : ""}</p>
              </div>
              <div className="data">
                <label htmlFor="languajes" className="title">Languajes:</label><p className='text' id="languajes">{country.languages ? Object.keys(country.languages).map(key => country.languages[key]).join(", ") : ""}</p>
              </div>
            </div>
          </div>
          <div className="border-countries">
            <div className="title">Border Countries:</div>
            <div className="border-container">
              {country.borders ? country.borders.map((borde, index) => {
                return (
                  <Link key={index} to={`../../country/${dataCountries.find(coun => coun.cca3 == borde).name.common}`}>
                    <button className="border">{borde}</button>
                  </Link>
                );
              }) : <>None</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
