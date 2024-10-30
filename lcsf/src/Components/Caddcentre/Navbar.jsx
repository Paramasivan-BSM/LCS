import Clogo from "../../assets/cadd_centre_logo.svg";
import "../Caddcentre/Home.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm container">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={Clogo} alt="CADD Centre Logo" />
        </a>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ms-auto">
            {/* Align this part to the right */}
            <li className="nav-item">
              <Link className="nav-link" to="lw">
                Livewire
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Synergy
              </Link>
            </li>

            {/* Dropdown Menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another link
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    A third link
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
