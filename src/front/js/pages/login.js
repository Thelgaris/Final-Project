import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/login.css";

export const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const { store, actions } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const sendUserInfo = async () => {
    if (
      user.email &&
      user.password != null &&
      user.email.trim() != "" &&
      user.password.trim() != ""
    ) {
      setError(null);
      const response = await fetch(store.url + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        actions.verify();
        await actions.getUsers();
        history.push("/homepageafterlogin");
        if (data.logged == false) {
          setError(data.msg);
        } else if (data.logged == true) {
          history.push("/homepageafterlogin");
        }
      } else {
        setError(data.msg);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } else {
      setError("Campos vacios");
    }
  };
  // const loginError = (async) => {
  //   if (sendUserInfo != True) {
  //     setError("Faltan datos o datos incorrectos");
  //   }
  // };

  return (
    <div className="container">
      <div className="containge-fluid mb-2">
        <Link to="/" className="pickateamlink">
          <img
            className="d-flex justify-content-center mx-auto"
            src="https://res.cloudinary.com/josema91/image/upload/v1657709640/mhvuimr22mcjcacqsgto.png
            "
            alt="Logo web"
            style={{ height: "210px", width: "210px" }}
          />
        </Link>
      </div>

      <div className="container login mb-3" style={{ marginTop: "-18px" }}>
        <div className="container-fluid">
          <div className="input-group mb-3">
            <label htmlFor="email" className="form-label"></label>
            <input
              id="email"
              type="text"
              className="form-control text-center text-muted mt-5"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
              required
            />
          </div>
          <div className="input-group mb-3">
            <input
              id="password"
              type={!showPassword ? "password" : "text"}
              name="password"
              className="form-control text-center"
              placeholder="Contraseña"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          {error != null ? (
            <span className="text-danger fs-6">{error}</span>
          ) : null}
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                value=""
                className="me-1"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
              <span>Mostrar contraseña</span>
            </label>
          </div>
        </div>
        <div className="d-grid gap-2 col-6-sm mx-auto">
          <button
            type="submit"
            className="btn login-btn btn-sm text-white w-75"
            onClick={() => {
              sendUserInfo();
            }}
          >
            Login
          </button>
        </div>
        <div className="container-fluid text-center mt-3">
          <span
            className="sp1 btn"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            ¿Olvidó su contraseña?
          </span>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
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
    </div>
  );
};
