import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <nav className="navbar">
      <div className="banner" >
        <Link to={'/'} className="root-route">
          <p>Where in the world?</p>
        </Link>
      </div>
      <div className="switch-mode">
        <button className="mode-button" onClick={toggleTheme}>
          <span className="icon"></span>
          <span className="label">{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
        </button>
      </div>
    </nav>
  );
};
