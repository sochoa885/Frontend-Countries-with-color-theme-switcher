import "./Navbar.css";

export const Navbar = (props) => {
  const { theme, toggleTheme } = props;
  return (
    <nav className="navbar">
      <div className="banner">
        <p>Where in the world?</p>
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
