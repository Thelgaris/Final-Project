import React from "react";
import { Link } from "react-router-dom";

export const ProfileComp = () => {
  return (
    <div className="container d-inline ">
      <div
        className="card-fluid bg-light rounded
      "
      >
        <img
          src="https://picsum.photos/seed/picsum/300/200"
          className="card-img-top img-fluid rounded-circle p-4"
          alt="Foto Perfil"
        />
        <div className="card-body rounded">
          <h5 className="card-title">Nombre</h5>
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
      </div>
    </div>
  );
};
