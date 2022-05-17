import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container" onClick={()=>{}}>
      <Link to="/" className="pickateamlink">
        <h1 className="text-center pickateam">PICKATEAM</h1>
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
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="" />
              Recordar
            </label>
          </div>
        </div>
        <Link to="/userProfile">
          <div className="btn login-btn justify-content-center pb-4">
            <button type="button" className="btn text-center text-white">
              Login
            </button>
          </div>
        </Link>
        <div className="container-fluid text-center mt-3">
          <span className="sp1">¿Olvidó su contraseña?</span>
        </div>
        <div className="container-fluid text-center mt-3">
          <span className="sp1">
            Al iniciar sesión, aceptas la Politica de privacidad y los Términos
            de uso de PICKATEAM
          </span>
        </div>
        <div className="container-fluid text-center mt-3">
          <span className="sp2">¿Nuevo usuario? <Link to="/register" className="registerlink">Registrate</Link></span>
        </div>
      </div>
    </div>
  );
};
