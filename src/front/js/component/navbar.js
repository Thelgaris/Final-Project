import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbarlink">
          <a className="navbar-brand bt-5" href="#">
            PICKATEAM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </Link>
        <form className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar ciudad"
              aria-label="Search"
            />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/login" className="navbarlink">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Login
                  </a>
                </li>
              </Link>
              <Link to="/register" className="navbarlink">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Registrate
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
