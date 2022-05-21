import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Register = () => {
  const { store, actions } = useContext(Context);
  const [userData, setUserData] = useState({});

  const createUser = async () => {
    const response = await fetch(
      "https://3001-thelgaris-finalproject-thgg0srgv96.ws-eu45.gitpod.io/api/register",
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    const data = await response.json();
    console.log("@@@@@@@@@@@", data);
  };

  return (
    <div
      className="container p-3 mb-5 rounded bg-secondary h-auto"
      style={{
        width: "25rem",
      }}
    >
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
            type="text"
            className="form-control"
            placeholder="Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
          />
          <input
            id="nombre"
            type="text"
            className="form-control"
            placeholder="Nombre"
            aria-label="Nombre"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUserData({ ...userData, nombre: e.target.value });
            }}
          />
          <input
            id="nacimiento"
            type="text"
            className="form-control"
            placeholder="Fecha de nacimiento"
            aria-label="Fecha de nacimiento"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setUserData({ ...userData, nacimiento: e.target.value });
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
            Registrar con Strava
          </button>
          <button className="btn btn-light" type="button">
            Registrar con Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
