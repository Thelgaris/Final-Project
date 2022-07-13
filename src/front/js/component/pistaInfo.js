import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PistaInfo = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    actions.getCityPistas();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justfy-content-center">
        {store.cityPistas.map((pista) => {
          return (
            <div className="col-6 justify-content-center" key={pista.id}>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-dark d-grid  mx-auto d-flex row d-inline"
                onClick={() => {
                  setShowModal(pista.id);
                }}
              >
                <i className="fas fa-h1 d-inline">{pista.name}</i>
              </button>

              {showModal == pista.id ? (
                <div className="row">
                  <div
                    className="position-absolute top-50 start-50 translate-middle mt-5 mb-5 align-middle"
                    style={{ width: "27rem", height: "30em" }}
                    tabIndex="-1"
                    aria-labelledby="pistaLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog border-0">
                      <div className="modal-content border-0">
                        <div className="modal-header border-0 d-flex gradient">
                          <h5 className="modal-title">
                            <i className="fas fa-h1 ms-2">{pista.name}</i>
                          </h5>
                          <button
                            type="button"
                            className="btn btn-secondary genbuttons btn-sm"
                            onClick={() => {
                              setShowModal(null);
                            }}
                          >
                            <i class="fas fa-h1">X</i>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="card w-100 border-0 rounded">
                            <img
                              src="https://picsum.photos/seed/picsum/300/200"
                              className="card-img-top p-2 rounded-3"
                              alt="ImagenPista"
                            />
                            <div className="card-body text-center">
                              <ul className="list-group list-group-flush">

                                <li className="list-group-item border-top gradient rounded-3">

                                  {pista.city}
                                </li>
                                <li className="list-group-item gradient rounded-3">
                                  <i className="fas fa-h1 d-inline">
                                    {pista.address}
                                  </i>
                                </li>

                                <li className="list-group-item gradient rounded-3">
                                  <i className="fas fa-h1 d-inline">
                                    {pista.description}
                                  </i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};
