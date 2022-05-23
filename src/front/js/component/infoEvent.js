import React from "react";
import { Link } from "react-router-dom";

export const InfoEvent = () => {
  return (
    <div className="container infoevent justify-content-center">
      <div className="row ">
        <div className="col-2 d-grid">
          <button
            type="button"
            className="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#evento"
          >
            Eventos
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
              <div className="modal-body text-center ">
                <div className="card w-100" style={{ width: "18rem" }}>
                  <img
                    src="https://picsum.photos/seed/picsum/300/200"
                    className="card-img-top"
                    alt="ImagenPista"
                  />
                  <ul className="list-group list-group-flush row">
                    <div className="col d-flex ">
                      <li className="list-group-item w-50 border-0">Ciudad</li>
                      <li className="list-group-item w-50 border-0">Deporte</li>
                    </div>
                    <div className="col d-flex ">
                      <li className="list-group-item w-50 border-0">Fecha</li>
                      <li className="list-group-item w-50 border-0">Hora</li>
                    </div>
                    <div className="col">
                      <li className="list-group-item border-0">Dirección</li>

                      <li className="list-group-item border-0">
                        Participantes
                      </li>
                      <li className="list-group-item border-0">
                        Desccripción del evento
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
