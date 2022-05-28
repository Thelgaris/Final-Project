import React from "react";
import { Link } from "react-router-dom";

export const CreateEventBtn = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Crear evento
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <input
                type="text"
                aria-label="Nombre"
                placeholder="Nombre del Evento"
                className="input-group mb-3 border-0"
              />

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Ciudad
                </label>
                <select className="form-select" id="Ciudad">
                  <option selected></option>
                  <option value="1">Barcelona</option>
                  <option value="2">Cadiz</option>
                  <option value="3">Granada</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Pistas
                </label>
                <select className="form-select" id="Pistas">
                  <option selected></option>
                  <option value="1">Pista 1</option>
                  <option value="3">...</option>
                  <option value="3">Punto de encuentro</option>
                </select>
              </div>

              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Deporte
                </label>
                <select className="form-select" id="Deporte">
                  <option selected></option>
                  <option value="1">Running</option>
                  <option value="2">Ciclismo</option>
                  <option value="3">Futbol</option>
                  <option value="3">Basket</option>
                  <option value="3">Otro</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Fecha
                </label>
                <select className="form-select" id="Fecha">
                  <option selected></option>
                  <option value="1"></option>
                  <option value="2"></option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Hora
                </label>
                <select className="form-select" id="Hora">
                  <option selected></option>
                  <option value="1"></option>
                  <option value="2"></option>
                </select>
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control w-25"
                  id="inputGroupFile01"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="descripcion"
                  rows="3"
                  placeholder="Describe tu evento"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning w-50 content-center"
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
