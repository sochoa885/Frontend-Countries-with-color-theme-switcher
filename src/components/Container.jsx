import "./Container.css";

export const Container = () => {
    return (
        <div className="main">
            <div className="input-search">
                <input type="text" id="search" />
            </div>
            <div className="select-region">
                <label htmlFor="region">Selecciona:</label>
                <select id="region">
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                </select>
            </div>
        </div>
    );
};