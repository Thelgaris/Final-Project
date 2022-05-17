import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <Link to="/">
        <h1 className="text-center">PICKATEAM</h1>
      </Link>
      <div className="container login">
        <div className="container-fluid">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control text-center mt-5"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control text-center"
              placeholder="Contraseña"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </div>
        </div>
        <Link to="/userProfile">
          <div className="container-fluid login-btn">
            <div className="btn justify-content-center">
              <button type="button" className="btn text-center text-white">
                Login
              </button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
