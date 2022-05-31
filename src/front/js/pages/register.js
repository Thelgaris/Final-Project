import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const createUser = async () => {
    const response = await fetch(
      "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu46.gitpod.io/api/register",
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    localStorage.setItem("userToken", data.access_token);
    history.push("/userProfile");
  };

  return (
    <div
      className="container p-3 mb-5 rounded bg-secondary h-auto Register"
      style={{
        width: "25rem",
      }}
    >
      <div></div>

      <div className="row mx-auto mt-1 mb-4 ">
        <div className="d-flex justify-content-center ">
          <Link to="/">
            <img
              src="https://picsum.photos/120/120"
              className="rounded-circle"
            ></img>
          </Link>
        </div>
      </div>
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
            type="password"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Nombre"
            aria-label="Nombre"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
          />
          <input
            id="birth"
            type="date"
            className="form-control"
            placeholder="Fecha de nacimiento"
            aria-label="Fecha de nacimiento"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUserData({ ...userData, birth: e.target.value });
            }}
          />
        </div>
        <div className="d-grid gap-2 mt-4 mx-auto">
          <button
            className="btn btn-warning"
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
  );
};

export default Register;
