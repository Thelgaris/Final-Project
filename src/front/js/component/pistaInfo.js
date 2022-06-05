import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PistaInfo = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    actions.getPistas();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justfy-content-center">
        {store.pistas.map((pista) => {
          return (
            <div className="col-12 " key={pista.id}>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-dark"
                onClick={() => {
                  setShowModal(pista.id);
                }}
              >
                {pista.name}
              </button>

              {showModal == pista.id ? (
                <div className="row">
                  <div
                    className="position-absolute top-100 start-50 translate-middle mt-5 align-middle"
                    tabIndex="-1"
                    aria-labelledby="pistaLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header bg-light bg-gradient ">
                          <h5 className="modal-title">{pista.name}</h5>
                          <button
                            type="button"
                            className="btn-close btn-sm"
                            onClick={() => {
                              setShowModal(null);
                            }}
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="card w-100">
                            <img
                              src="https://picsum.photos/seed/picsum/300/200"
                              className="card-img-top"
                              alt="ImagenPista"
                            />
                            <div className="card-body text-center">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">Ciudad</li>

                                <li className="list-group-item">
                                  {pista.address}
                                </li>

                                <li className="list-group-item">
                                  {pista.description}
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
