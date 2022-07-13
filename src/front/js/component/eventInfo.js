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
    <div className="container-fluid">
      <div className="row d-flex justfy-content-center">
        {store.events.map((event) => {
          return (
            <div className=" " key={event.id}>
              <button
                type="button"
                className="btn btn-link text-decoration-none text-dark d-grid  mx-auto d-flex row d-inline"
                onClick={() => {
                  setShowModal(event.id);
                }}
              >
                <div className=" col-12 d-inline">
                  <i className="fas fa-h1 col-9 w-100 d-inline">{event.name}</i>

                  <i
                    className="fas fa-users p-2 mb-0 border-0 d-inline "
                    style={{ color: "#014f5a" }}
                  >
                    {event.participants}
                  </i>
                </div>
              </button>

              {showModal == event.id ? (
                <div className="row">
                  <div
                    className="position-absolute top-100 start-50 translate-middle mb-5 align-middle"
                    style={{ width: "27rem", height: "30em" }}
                    tabIndex="-1"
                    aria-labelledby="eventLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog border-0">
                      <div className="modal-content border-0">
                        <div className="modal-header border-0 d-flex gradient">
                          <i className="fas fa-h1 ms-2">{event.name}</i>
                          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            {!store.userEvents
                              .map((e) => e.id)
                              .includes(event.id) ? (
                              <button
                                type="button"
                                className="btn btn-warning text-white btn-sm genbuttons"
                                onClick={async () => {
                                  await actions.setJoinEvents(event),
                                    setShowModal(null);
                                }}
                              >
                                <i className="fas fa-h1">Join</i>
                              </button>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-warning text-white btn-sm genbuttons"
                                onClick={async () => {
                                  await actions.setUnJoinEvents(event.id),
                                    setShowModal(null);
                                }}
                              >
                                <i className="fas fa-h1">Unjoin</i>
                              </button>
                            )}
                            <button
                              type="button"
                              className="btn btn-secondary genbuttons btn-sm"
                              onClick={() => {
                                setShowModal(null);
                              }}
                            >
                              <i className="fas fa-h1">X</i>
                            </button>
                          </div>
                        </div>
                        <div className="modal-body">
                          <div className="card w-100 border-0 rounded">
                            <img
                              src="https://picsum.photos/seed/picsum/300/200"
                              className="card-img-top p-2 rounded"
                              alt="Imagenevent"
                            />
                            <div className="card-body text-center">
                              <ul className="list-group list-group-flush d-inline">
                                <li className="list-group-item border-top gradient rounded-3">
                                  <i className="fas fa-globe-africa ">
                                    {event.city}
                                  </i>
                                </li>

                                <li className="list-group-item gradient rounded-3">
                                  <i className="fas fa-map-marker-alt ">
                                    {event.address}
                                  </i>
                                </li>

                                <li className="list-group-item gradient rounded-3">
                                  <i className="fas fa-calendar-alt col-4  w-100">
                                    {event.date}
                                  </i>
                                  <i className="fas fa-clock col-4 ">
                                    {event.time}
                                  </i>
                                  <i
                                    className="fas fa-users  col-4"
                                    style={{ color: "#014f5a" }}
                                  >
                                    {event.participants}
                                  </i>
                                </li>

                                <li className="list-group-item gradient rounded-3">
                                  <i className="fas fa-newspaper">
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
