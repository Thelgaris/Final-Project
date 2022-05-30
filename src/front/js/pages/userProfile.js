import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";
import { Sportmodal } from "../component/sportmodal";

export const UserProfile = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSports;
  }, []);

  const sendUserInfo = async () => {
    if (
      (user.name,
      user.surname,
      user.birth,
      user.gender != null && user.name.trim(),
      user.surname.trim(),
      user.birth.trim(),
      user.gender.trim() != "")
    ) {
      setError(null);
      const response = await fetch(
        "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu46.gitpod.io/api/register",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        }
      );
      const data = await response.json();
      console.log("@@@@@@@@@@@", data);
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
        <div>
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
            id="surname"
            type="select"
            className="form-control text-center"
            onChange={(e) => setUser({ ...user, surname: e.target.value })}
            placeholder="Apellidos"
            aria-label="surname"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <input
            id="birth"
            type="date"
            className="birth form-control text-center"
            onChange={(e) => setUser({ ...user, birth: e.target.value })}
            placeholder="Birth"
            aria-label="Birth"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <select className="text-center">
            <option value>Hombre</option>
            <option value>Mujer</option>
          </select>
        </div>

        <div className="input-group mx-auto mb-3 w-25">
          <input
            id="city"
            type="text"
            className="form-control text-center"
            onChange={(e) => setUser({ ...user, city: e.target.value })}
            placeholder="Ciudad"
            aria-label="City"
            aria-describedby="basic-addon1"
          />
        </div>

        <div>
          <Sportmodal
            user={user}
            setUser={(e) => {
              setUser({ ...user, sports: e });
            }}
          />
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
    </div>
  );
};
