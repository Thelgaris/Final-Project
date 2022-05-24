import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const sendUserInfo = async () => {
    if (user.email != null && user.email.trim() != "") {
      setError(null);
      const response = await fetch(
        "https://3001-thelgaris-finalproject-thgg0srgv96.ws-eu45.gitpod.io/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem("userToken", data.access_token);
        history.push("/userProfile");
        if (data.logged == false) {
          setError("Rellenar datos");
        } else if (data.logged == true) {
          history.push("/userProfile");
        }
      } else {
        setError("Rellenar datos");
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    }
  };
  const loginError = (async) => {
    if (sendUserInfo != True) {
      setError("Faltan datos o datos incorrectos");
    }
  };

  return (
    <div className="container">
      <Link to="/" className="pickateamlink" onClick={() => {}}>
        <h1 className="text-center pickateam">PICKATEAM</h1>
      </Link>
      <div className="container login">
        <div className="container-fluid">
          <div className="input-group mb-3">
            <input
              id="email"
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
              id="password"
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
            onClick={() => {
              sendUserInfo();
            }}
          >
            Login
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
