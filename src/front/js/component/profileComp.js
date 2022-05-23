import React from "react";
import { Link } from "react-router-dom";

export const ProfileComp = () => {
  return (
    <div className="container ">
      <div className="" style={{ width: "23rem" }}>
        <img
          src="https://picsum.photos/seed/picsum/300/200"
          className="card-img-top rounded-circle p-5"
          alt="Foto Perfil"
        />
        <div className="card-body">
          <h5 className="card-title">Nombre User.id</h5>
          <p className="card-text">Ciudad</p>
        </div>

        <ul className="list-group list-group-flush d-flex flex-row border-0">
          <li className="list-group-item col-sm-4 border-0">Siguiendo</li>
          <li className="list-group-item col-sm-4 border-0">Seguidores</li>
          <li className="list-group-item col-sm-4 border-0">Actividades</li>
        </ul>
        <ul className="list-group list-group-flush d-flex flex-row border-0">
          <li className="list-group-item col-4 border-0">15</li>
          <li className="list-group-item col-4 border-0 ">24</li>
          <li className="list-group-item col-4 border-0">56</li>
        </ul>

        <div className="card-body">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <button
                className="nav-link bg-link active"
                aria-current="page"
                href="#"
              >
                Running
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link bg-link disabled">Cycling</button>
            </li>
          </ul>
          <div className="card-footer mt-2">
            <p className="card-text">Esta semana</p>
            <p className="card-text pt-3">23 Km</p>
          </div>
        </div>
      </div>
    </div>
  );
};
