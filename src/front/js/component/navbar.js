import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  const sendToLoginPage = async () => {
    if (store.logged) {
      localStorage.removeItem("userToken");
      history.push("/login");
    }
  };

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
                  <span
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Login
                  </span>
                </li>
              </Link>
              <Link to="/login" className="navbarlink">
                <li className="nav-item">
                  <span
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={() => sendToLoginPage()}
                  >
                    Logout
                  </span>
                </li>
              </Link>
              <Link to="/register" className="navbarlink">
                <li className="nav-item">
                  <span className="nav-link" href="#">
                    Registrate
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
