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
    <div className="col-10 offset-1">
      <div
        className="xscroll  border-1 rounded-pill"
        // style={{ width: "600px" }}
      >
        {store.cityPistas && store.cityPistas.length > 0
          ? store.cityPistas.map((pista) => {
              return (
                <div
                  className=" h-100 ms-1 me-1 mt-2 mb-2 d-flex rounded-3"
                  key={pista.id}
                  style={{
                    width: "14rem",
                    height: "8rem",
                  }}
                >
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none text-dark  mx-auto d-flex"
                    onClick={() => {
                      setShowModal(pista.id);
                    }}
                  >
                    <div className="card-body me-2">
                      <h6>{pista.name}</h6>
                    </div>
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
                          <div className="modal-content border-2">
                            <div className="modal-header border-0 d-flex ">
                              <h5 className="modal-title">{pista.name}</h5>
                              <button
                                type="button"
                                className="btn btn-secondary genbuttons btn-sm"
                                onClick={() => {
                                  setShowModal(null);
                                }}
                              >
                                X
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="card w-100 border-0 rounded">
                                {/*                               <img
                                  src="https://picsum.photos/seed/picsum/300/200"
                                  className="card-img-top p-2 rounded-3"
                                  alt="ImagenPista"
                                /> */}
                                <div className="card-body text-center">
                                  <ul className="list-group list-group-flush">
                                    <li className="list-group-item border-top  rounded-3">
                                      {pista.city}
                                    </li>
                                    <li className="list-group-item  rounded-3">
                                      {pista.address}
                                    </li>

                                    <li className="list-group-item  rounded-3">
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
            })
          : null}
      </div>
    </div>
  );
};
