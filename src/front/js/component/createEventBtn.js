import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Calendar from "react-calendar";
import "../../styles/index.css";

export const CreateEventBtn = () => {
  const [userEvents, setUserEvents] = useState({});
  const [date, setDate] = useState(
    new Date().toLocaleString("en-US").split(",")[0]
  );
  const [showModal, setShowModal] = useState([]);
  const { store, actions } = useContext(Context);

  const today = new Date();

  useEffect(() => {
    actions.getSports();
    actions.getEvents();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning genbuttons text-white"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          setShowModal != null;
        }}
      >
        <i className="fas fa-h1">Crear evento</i>
      </button>

      {showModal != null ? (
        <div className="modal " id="exampleModal" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content" style={{ width: "400px" }}>
              <div
                className="modal-header  d-flex border-0 d-grid gap-2 d-md-flex "
                style={{ height: "70px" }}
              >
                <h4 className="d-flex mt-2">
                  <input
                    type="form-control"
                    aria-label="Nombre"
                    placeholder="Nombre del Evento"
                    className=" border-0 mt-2"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, name: e.target.value });
                    }}
                  />
                </h4>

                <button
                  type="button"
                  className="btn btn-secondary genbuttons btn-sm"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
              <div className="modal-body border-top">
                <div className="card-fluid mb-1" style={{ maxwidth: "400px" }}>
                  <div className="row g-0 ">
                    <div className="col-md-4 border-0 rounded">
                      <img
                        src="https://picsum.photos/seed/picsum/250/150"
                        className="card-img-top img-fluid rounded mb-3 p-2"
                        style={{ width: "250px", height: "150px" }}
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body ">
                        <div className="input-group mb-1">
                          <label
                            className="input-group-text col-4 fontSize"
                            htmlFor="inputGroupSelect01"
                          >
                            <strong> Ciudad</strong>
                          </label>
                          <select
                            className="form-select fontSize"
                            id="Ciudad"
                            onChange={(e) => {
                              setUserEvents({
                                ...userEvents,
                                city: e.target.value,
                              });
                            }}
                          >
                            <option></option>;<option>Barcelona</option>;
                            <option>Cadiz</option>;
                          </select>
                        </div>
                        <div className="input-group mb-1">
                          <label
                            className="input-group-text col-4 fontSize"
                            htmlFor="inputGroupSelect01"
                          >
                            <strong>Pistas</strong>
                          </label>

                          <select
                            className="form-select fontSize"
                            onChange={(e) => {
                              setUserEvents({
                                ...userEvents,
                                pista: e.target.value,
                              });
                            }}
                          >
                            <option></option>;
                            {store.pistas.map((pista) => {
                              return (
                                <option key={pista.id}>{pista.name}</option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="input-group mb-1">
                          <label
                            className="input-group-text col-4 fontSize"
                            htmlFor="inputGroupSelect01"
                          >
                            <strong>Deporte</strong>
                          </label>
                          <select
                            className="form-select fontSize"
                            onChange={(e) => {
                              setUserEvents({
                                ...userEvents,
                                sport: e.target.value,
                              });
                            }}
                          >
                            <option></option>;
                            {store.sports.map((sport) => {
                              return (
                                <option key={sport.id}>{sport.name}</option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="input-group mb-1">
                  <label
                    className="input-group-text col-3 border-3 border-light fontSize"
                    htmlFor="inputGroupSelect01"
                  >
                    <strong>Dirección</strong>
                  </label>
                  <input
                    className="w-75 border-3 border-light rounded ps-2 pe-2 fontSize"
                    type="address"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, address: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group mb-1">
                  <label
                    className="input-group-text col-3 border-2 border-light fontSize"
                    htmlFor="inputGroupSelect01"
                  >
                    <strong>Fecha</strong>
                  </label>

                  {/* <div className="modal-dialog modal-dialog-centered">
                    <Calendar />
                  </div> */}

                  <input
                    className="w-75 border-2 border border-light rounded ps-2 pe-2 fontSize"
                    type="date"
                    value={date}
                    mindate={today}
                    onChange={(e) => {
                      setDate(e.target.value);
                      console.log(date);
                      setUserEvents({ ...userEvents, date: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group mb-1">
                  <label
                    className="input-group-text col-3 border-2 border-light fontSize"
                    htmlFor="inputGroupSelect01 time"
                  >
                    <strong>Hora</strong>
                  </label>

                  <input
                    className="w-75 border-2 border border-light rounded ps-2 pe-2 fontSize"
                    type="time"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, time: e.target.value });
                    }}
                  />
                </div>

                <div className="m">
                  <textarea
                    className="form-control fontSize"
                    rows="2"
                    placeholder="Describe tu evento"
                    onChange={(e) => {
                      setUserEvents({
                        ...userEvents,
                        description: e.target.value,
                      });
                    }}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning w-50 content-center genbuttons text-white"
                  onClick={async () => {
                    await actions.setEvents(userEvents);
                    setShowModal(null);
                  }}
                >
                  <i className="fas fa-h1">Crear</i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
