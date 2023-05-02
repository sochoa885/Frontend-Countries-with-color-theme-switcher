
import "./Card.css";

export const Card = (props) => {
    const { lastCountryRef, country } = props;
    return (
        <div className="card" ref={lastCountryRef}>
            <div className="card-header" style={{ backgroundImage: `url(${country.flags.png})` }}>
                <div className="card-hover">
                    View Details
                </div>
            </div>
            <div className="card-footer">
                <div className="country">
                    <p>{country.name.common}</p>
                </div>
                <div className="data">
                    <label htmlFor="population" className="title">Population:</label><p className='text' id="population">{country.population}</p>
                </div>
                <div className="data">
                    <label htmlFor="region" className="title">Region:</label><p className='text' id="region">{country.region}</p>
                </div>
                <div className="data">
                    <label htmlFor="capital" className="title">Capital:</label><p className='text' id="capital">{country.capital}</p>
                </div>
            </div>
        </div>
    );
};