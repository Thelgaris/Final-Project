import React from "react";
import { Link } from "react-router-dom";

export const ProfileComp = () => {
  return (
    <div className="container d-inline h-auto d-inline-block">
      <div
        className="card bg-white border-0
      "
      >
        <img
          src="https://picsum.photos/seed/picsum/50/50"
          className="card-img-top  rounded-circle p-5"
          alt="Foto Perfil"
        />
        <div className="card-body rounded ">
          <h4 className="card-title">Nombre</h4>
          <h5 className="card-text">Ciudad</h5>
        </div>

        <ul className="list-group list-group-flush d-flex flex-row border-0">
          <li className="list-group-item col-6 border-0">Siguiendo</li>
          <li className="list-group-item col-6 border-0">Seguidores</li>
        </ul>
        <ul className="list-group list-group-flush d-flex flex-row border-0">
          <li className="list-group-item col-6 border-0">15</li>
          <li className="list-group-item col-6 border-0 ">24</li>
        </ul>
      </div>
    </div>
  );
};
