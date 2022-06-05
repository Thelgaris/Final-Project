import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EventInfo = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    actions.getEvents();
  }, []);

  return (
    <div className="container">
      <div className="row d-flex justfy-content-center">
        {store.events.map((event) => {
          return (
            <div className="col-12 " key={event.id}>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-dark"
                onClick={() => {
                  setShowModal(event.id);
                }}
              >
                {event.name}
              </button>

              {showModal == event.id ? (
                <div className="row">
                  <div
                    className="position-absolute top-100 start-50 translate-middle mt-5 align-middle"
                    tabIndex="-1"
                    aria-labelledby="eventLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header bg-light bg-gradient ">
                          <h5 className="modal-title">{event.name}</h5>
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
                              alt="Imagenevent"
                            />
                            <div className="card-body text-center">
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item">Ciudad</li>

                                <li className="list-group-item">
                                  {event.date}
                                </li>

                                <li className="list-group-item">
                                  {event.description}
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
