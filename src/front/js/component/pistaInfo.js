import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PistaInfo = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getPistas();
  }, []);

  return (
    <div className="container pistaInfo">
      <div className="row d-flex justfy-content-center">
        {store.pistas.map((pista) => {
          return (
            <div className="col-4 " key={pista.id}>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-dark"
                data-bs-toggle="modal"
                data-bs-target="#pista"
              >
                {pista.name}
              </button>
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
                      <h5 className="modal-title">{store.OnePista.name}</h5>
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

                            <li className="list-group-item">
                              {store.pistas.addres}
                            </li>

                            <li className="list-group-item">
                              {store.pistas.description}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
