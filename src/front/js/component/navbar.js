import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbarlink">
          <h1 className="navbar-brand bt-5" href="#">
            PICKATEAM
          </h1>
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
                  <h1 className="nav-link active" aria-current="page" href="#">
                    Login
                  </h1>
                </li>
              </Link>
              <Link to="/register" className="navbarlink">
                <li className="nav-item">
                  <h1 className="nav-link" href="#">
                    Registrate
                  </h1>
                </li>
              </Link>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
