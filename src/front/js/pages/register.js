import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const sendUserInfo = async () => {
    if (user.email != null && user.email.trim() != "") {
      setError(null);
      const response = await fetch(
        "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu45.gitpod.io/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.created) {
        history.push("/userProfile");
      }
    } else {
      setError("Faltan datos por ingresar");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className="container" onClick={() => {}}>
      <Link to="/" className="pickateamlink">
        <h1 className="text-center pickateam">NUEVO USUARIO</h1>
      </Link>
      <div className="container login">
        <div className="container-fluid">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control text-center mt-5"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
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
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="" className="me-1" />
              <span>Recordar</span>
            </label>
          </div>
        </div>
        <div className="d-grid gap-2 mx-auto">
          <button
            type="button"
            className="btn login-btn btn-warning text-white"
            onClick={() => sendUserInfo()}
          >
            Registrar
          </button>
        </div>
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
          <span className="sp2">
            ¿Nuevo usuario?{" "}
            <Link to="/register" className="registerlink">
              Registrate
            </Link>
          </span>
        </div>
      </div>
      {error != null ? <h3 className="text-danger">{error}</h3> : null}
    </div>
  );
};
