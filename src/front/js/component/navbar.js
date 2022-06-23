import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/navbar.css";

import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const sendToLoginPage = async () => {
<<<<<<< HEAD
    if (store.logged == true) {
=======
    if (store.logged) {
>>>>>>> 9e683946ec74b539c1ff6f753354324925336d90
      localStorage.removeItem("access_token");
      history.push("/login");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-light ">
      <div className="container-fluid ">
        <Link to="/" className="navbarlink text-decoration-none">
          <div>
            {" "}
            <img
              src="https://github.com/Thelgaris/Final-Project/blob/develop_Jrev1_register_design/docs/assets/logo2.png?raw=true"
              style={{ height: "80px", width: "80px" }}
            />
          </div>

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
              <Link to="/login" className="navbarlink  text-decoration-none">
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
              <Link to="/register" className="navbarlink  text-decoration-none">
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
