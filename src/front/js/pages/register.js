import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";

export const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const { store, actions } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const createUser = async () => {
    const response = await fetch(store.url + "/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    localStorage.setItem("access_token", data.access_token);
    history.push("/userProfile");
  };

  return (
    <div className="container">
      <div className="containge-fluid mb-2">
        <Link to="/" className="pickateamlink" onClick={() => {}}>
          <img
            className="d-flex justify-content-center mx-auto"
            src="https://github.com/Thelgaris/Final-Project/blob/develop_Jrev1_login_design/docs/assets/Logo1.PNG?raw=true"
            alt="Logo web"
            style={{ height: "160px", width: "160px" }}
          />
        </Link>
      </div>
      <div
        className="container p-3 mb-5 rounded bg-secondary h-auto Register"
        style={{
          width: "25rem",
        }}
      >
        <div className="row mx-auto">
          <div className="d-grid gap-3">
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
            />
            <input
              id="password"
              type={!showPassword ? "password" : "text"}
              className="form-control"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            <input
              id="passwordvalidation"
              type={!showPassword ? "password" : "text"}
              className="form-control"
              placeholder="Confirm password"
              aria-label="Confirm password"
              aria-describedby="basic-addon1"
            />
          </div>
          <div className="checkbox mb-3 mt-4">
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
          <div className="d-grid gap-2 col-6-sm mx-auto">
            <button
              className="btn register-btn btn-sm text-white w-75 mt-3"
              type="button"
              onClick={() => {
                createUser();
              }}
            >
              Registrar
            </button>

            <button className="btn btn-light" type="button">
              <img
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/323_Strava_logo-48.png"
                style={{ width: "25px", height: "25px ", float: "left" }}
              />
              Registrar con Strava
            </button>
            <button className="btn btn-light" type="button">
              <img
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                style={{ width: "20px", height: "20px ", float: "left" }}
              />
              Registrar con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
