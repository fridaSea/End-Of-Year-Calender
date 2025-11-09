import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLink to="/">Kalenderübersicht</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
