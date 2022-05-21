import React, { useState, useEffect, useContext } from "react";

export const UserProfile = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="jumbotron jumbotron-fluid w-50">
          <div className="container-fluid">
            <h1 className="display-4">UNETE A LA COMUNIDAD</h1>
            <h2 style={{ color: "gray" }}>
              Crea un perfil con PICKATEAM y únete a nuestra comunidad de
              deportistas. Encuentra y conoce nuevos compañeros de juego. Elige
              tu ciudad y crea tus eventos
            </h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="input-group mb-3 w-50">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Nombre"
            aria-label="Name"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Apellidos"
            aria-label="Apellidos"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Fecha de nacimiento"
            aria-label="Fecha de nacimiento"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Género"
            aria-label="Género"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Ciudad"
            aria-label="Ciudad"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3 w-25">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Deportes que practicas"
            aria-label="Apellidos"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
};
