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

      <div className="input-group mx-auto mb-3 w-25">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Nombre"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Apellidos"
          aria-label="Apellidos"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          type="text"
          className="form-control text-center"
          placeholder="Fecha de nacimiento"
          aria-label="Fecha de nacimiento"
          aria-describedby="basic-addon1"
        />
      </div>

      <div className="input-group mx-auto mb-3 w-25">
        <input
          type="text"
          className="form-control text-center"
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

      <button
        type="button"
        className="btn btn-light w-25"
        data-bs-toggle="modal "
        data-bs-target="#exampleModal"
      >
        Deportes que practicas
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
