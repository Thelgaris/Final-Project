import React, { Component } from "react";
import "../../styles/userprofile.css";

export const Sportmodal = () => (
  <div className="mx-auto">
    <button
      type="button"
      className="btn deportesbtn btn-white mx-auto"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Deportes
    </button>
    <div
      className="modal fade "
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Deportes que practico
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ul className="list-unstyled">
              <li>baloncesto</li>
              <li>futbol</li>
              <li>running</li>
              <li>bicicleta</li>
            </ul>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn modalbtn2 btn-secondary "
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn modalbtn btn-primary">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
