import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/register.css";
import { StravaButton } from "../component/stravaButton";

export const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(null);
  const { store, actions } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);

  const createUser = async () => {
    if (
      userData.email &&
      userData.password != null &&
      userData.passwordvalidation == userData.password &&
      userData.email.trim() != "" &&
      userData.password.trim() != "" &&
      userData.passwordvalidation.trim() != ""
    ) {
      setError(null);
      const response = await fetch(store.url + "/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
        history.push("/userProfile");
        if (data.registered == false) {
          setError(data.msg);
        } else if (data.registered == true) {
          history.push("/userProfile");
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

  return (
    <div className="container">
      <div className="container-fluid">
        <Link to="/" className="pickateamlink" onClick={() => {}}>
          <img
            className="d-flex justify-content-center mx-auto"
            src="https://github.com/Thelgaris/Final-Project/blob/develop_Jrev1_register_design/docs/assets/logo2.png?raw=true"
            alt="Logo web"
            style={{ height: "210px", width: "210px" }}
          />
        </Link>
      </div>
      <div className="container mb-3 Register" style={{ marginTop: "-10px" }}>
        <div className="row mx-auto">
          <div className="d-grid gap-3">
            <input
              id="email"
              type="text"
              className="form-control text-center mt-5"
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
              className="form-control text-center"
              placeholder="Contraseña"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
            />
            <input
              id="passwordvalidation"
              type={!showPassword ? "password" : "text"}
              className="form-control text-center"
              placeholder="Confirmar contraseña"
              aria-label="Confirm password"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setUserData({
                  ...userData,
                  passwordvalidation: e.target.value,
                });
              }}
            />
          </div>
          {error != null ? (
            <span className="text-danger fs-6">{error}</span>
          ) : null}
          <div className="checkbox mb-3 mt-3">
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
              className="btn register-btn btn-sm text-white w-75"
              type="button"
              onClick={() => {
                createUser();
              }}
            >
              Registrar
            </button>
            <div className="container-fluid text-center mt-3">
              <StravaButton />
              <button className="btn btn-light w-75" type="button">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                  style={{
                    width: "20px",
                    height: "20px ",
                    float: "left",
                    marginLeft: "3px",
                  }}
                />
                <span className="text-center">Registrar con Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
