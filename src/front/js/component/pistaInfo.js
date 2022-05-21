import React from "react";
import { Link } from "react-router-dom";

export const PistaInfo = () => {
  return (
    <div className="container infoevent">
      <div className="row">
        <div className="col-2 d-grid">
          <button
            type="button"
            className="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#evento"
          >
            Nombre pista
          </button>
        </div>

        <div
          className="modal fade"
          id="evento"
          tabindex="-1"
          aria-labelledby="eventoLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-light bg-gradient">
                <h5 className="modal-title" id="eventoLabel">
                  Nombre del evento
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body ">
                <div className="card w-100" style={{ width: "18rem" }}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Ciudad</li>
                    <li className="list-group-item">Deporte</li>
                    <li className="list-group-item">Lugar</li>
                    <li className="list-group-item">Fecha</li>
                    <li className="list-group-item">Hora</li>
                    <li className="list-group-item">Participantes</li>
                  </ul>
                </div>
              </div>
              <div className="modal-footer w-100 d-flex">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Desccripción del evento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
