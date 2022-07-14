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
    <div className="col-10 offset-1">
      <div
        className="xscroll  border-1 rounded-pill"
        // style={{ width: "600px" }}
      >
        {store.events.map((event) => {
          return (
            <div
              className="h-100 ms-1 me-1 mt-2 mb-5 d-flex  rounded-3"
              key={event.id}
              style={{
                /* width: "14rem", */
                height: "8rem",
              }}
            >
              <button
                type="button"
                className="btn btn-link text-decoration-none text-dark  mx-auto d-flex"
                onClick={() => {
                  setShowModal(event.id);
                }}
              >
                {/* <img
                  src={
                    store.events
                      ? store.events.photo
                      : "https://picsum.photos/seed/picsum/300/200"
                  }
                  className="p-2 justify-content-center rounded-circle"
                  alt="..."
                  style={{ width: "6rem", height: "6rem" }}
                /> */}
                <div className="card-body me-2">
                  <p
                    className="card-title justify-content-center text-center"
                    style={{ height: "2em" }}
                  >
                    <div>{event.name}</div>

                    <h6>{event.city}</h6>

                    <i
                      className="fas fa-users p-2 mb-0 border-0 d-inline "
                      style={{ color: "#014f5a" }}
                    >
                      {event.participants}
                    </i>
                  </p>
                </div>
              </button>

              {showModal == event.id ? (
                <div className="row">
                  <div
                    className="position-absolute top-50 start-50 translate-middle mb-5 align-middle"
                    // <!-- Vertically centered scrollable modal -->
                    // <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    //   ...
                    // </div>
                    style={{ width: "27rem", height: "30em" }}
                    tabIndex="-1"
                    aria-labelledby="eventLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog modal-dialog-centered border-0">
                      <div className="modal-content border-2">
                        <div className="modal-header border-0 d-flex ">
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
                            {/*  <img
                              src="https://picsum.photos/seed/picsum/300/200"
                              className="card-img-top p-2 rounded"
                              alt="Imagenevent"
                            /> */}
                            <div className="card-body text-center">
                              <ul className="list-group list-group-flush d-inline">
                                <li className="list-group-item border-top  rounded-3">
                                  <i className="fas fa-globe-africa ">
                                    {event.city}
                                  </i>
                                </li>

                                <li className="list-group-item  rounded-3">
                                  <i className="fas fa-map-marker-alt ">
                                    {event.address}
                                  </i>
                                </li>

                                <li className="list-group-item  rounded-3">
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

                                <li className="list-group-item  rounded-3">
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
