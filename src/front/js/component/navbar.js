import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/navbar.css";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const sendToLoginPage = async () => {
    if (store.logged) {
      localStorage.removeItem("access_token");
      actions.verify();
      history.push("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbarlink">
          <img
            className="d-flex justify-content-center mx-auto"
            src="https://res.cloudinary.com/josema91/image/upload/v1657709640/mhvuimr22mcjcacqsgto.png
            "
            alt="Logo web"
            style={{ height: "100px", width: "100px" }}
          />
        </Link>
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

        <form className="d-flex">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {store.logged ? (
                <Link to="/login" className="navbarlink  text-decoration-none">
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
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="navbarlink  text-decoration-none"
                  >
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
                  <Link
                    to="/register"
                    className="navbarlink  text-decoration-none"
                  >
                    <li className="nav-item">
                      <span className="nav-link" href="#">
                        Registrate
                      </span>
                    </li>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};
