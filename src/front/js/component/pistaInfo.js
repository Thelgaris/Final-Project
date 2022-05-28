import React from "react";
import { Link } from "react-router-dom";

export const PistaInfo = () => {
  return (
    <div className="container pistaInfo">
      <div className="row">
        <div className="col-4">
          <button
            type="button"
            className="btn btn-link"
            data-bs-toggle="modal"
            data-bs-target="#pista"
          >
            Nombre pista
          </button>
        </div>

        <div
          className="modal fade"
          id="pista"
          tabIndex="-1"
          aria-labelledby="pistaLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-light bg-gradient">
                <h5 className="modal-title" id="pistaLabel">
                  Nombre Pista
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
                  <img
                    src="https://picsum.photos/seed/picsum/300/200"
                    className="card-img-top"
                    alt="ImagenPista"
                  />
                  <div className="card-body text-center">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Ciudad</li>

                      <li className="list-group-item">Dirección</li>

                      <li className="list-group-item">Descripción</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
