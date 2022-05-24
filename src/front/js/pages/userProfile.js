import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/userprofile.css";
import { Sportmodal } from "../component/sportmodal";

export const UserProfile = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const sendUserInfo = async () => {
    if (
      (user.name,
      user.apellidos,
      user.birth,
      user.genero != null && user.name.trim(),
      user.apellidos.trim(),
      user.birth.trim(),
      user.genero.trim() != "")
    ) {
      setError(null);
      const response = await fetch(
        "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu45.gitpod.io/api/userprofile",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
    } else {
      setError("faltan datos por ingresar");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="jumbotron jumbotron-fluid w-50">
          <div className="container-fluid">
            <h1 className="display-4">UNETE</h1>
            <h2 style={{ color: "gray" }}></h2>
          </div>
        </div>
      </div>
      <div className="button-container">
        <img
          className="avatar mt-4 mb-4"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <Link to="/home">
          <i className="fas fa-camera fa-2x" style={{ fontsize: "50px" }}></i>
        </Link>
      </div>
      <div className="input-group mx-auto mb-3 w-25">
        <input
          id="name"
          type="text"
          className="form-control text-center"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          placeholder="Nombre"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          id="apellidos"
          type="text"
          className="form-control text-center"
          onChange={(e) => setUser({ ...user, apellidos: e.target.value })}
          placeholder="Apellidos"
          aria-label="Apellidos"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          id="birth"
          type="text"
          className="form-control text-center"
          onChange={(e) => setUser({ ...user, birth: e.target.value })}
          placeholder="Fecha nacimiento"
          aria-label="Fecha de nacimiento"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          id="gender"
          type="text"
          className="form-control text-center"
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
          placeholder="Género"
          aria-label="Género"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Ciudad"
          aria-label="Ciudad"
          aria-describedby="basic-addon1"
        />
      </div>

      <div>
        <Sportmodal />
      </div>
      <div>
        <button
          type="button"
          className="btn save-btn btn-warning text-white mx-auto mt-2"
          onClick={() => sendUserInfo()}
        >
          Guardar
        </button>
      </div>
    </div>
  );
};
