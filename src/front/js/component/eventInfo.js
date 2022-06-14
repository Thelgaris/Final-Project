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
                {event.participants}
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
                        <div className="modal-header bg-light bg-gradient d-flex">
                          <h5 className="modal-title ">{event.name}</h5>
                          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button
                              type="button"
                              className="btn btn-warning btn-sm"
                              onClick={async () => {
                                await actions.setJoinEvents(event),
                                  setShowModal(null);
                              }}
                            >
                              Join
                            </button>
                            <button
                              type="button"
                              className="btn btn-light btn-sm"
                              onClick={() => {
                                setShowModal(null);
                              }}
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="modal-body">
                          <div className="card w-100">
                            <img
                              src="https://picsum.photos/seed/picsum/300/200"
                              className="card-img-top"
                              alt="Imagenevent"
                            />
                            <div className="card-body text-center">
                              <ul className="list-group list-group-flush d-inline">
                                <li className="list-group-item">
                                  <i class="fas fa-globe-africa">
                                    {event.city}
                                  </i>
                                </li>

                                <li className="list-group-item border-0 ">
                                  <i class="fas fa-map-marker-alt">
                                    {event.address}
                                  </i>
                                </li>

                                <li className="list-group-item">
                                  <i className="fas fa-calendar-alt me-2 col-4 text-start">
                                    {event.date}
                                  </i>
                                  <i className="fas fa-clock me-2 col-3 text-center">
                                    {event.time}
                                  </i>
                                  <i className="fas fa-users p-2 col-3 text-end">
                                    {event.participants}
                                  </i>
                                </li>

                                <li className="list-group-item ">
                                  <i class="fas fa-newspaper">
                                    {event.description}
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
