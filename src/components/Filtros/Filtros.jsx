import "./Filtros.css";

export const Filtros = () => {
  return (
    <div className="filtros">
      <div className="input-search">
        <i className="search-icon"></i>
        <input className="search" type="text" id="search" placeholder="Search for a country..." />
      </div>
      <div className="div-region">
        <label htmlFor="region">Selecciona:</label>
        <select className="select-region" id="region">
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </div>
    </div>
  );
};
