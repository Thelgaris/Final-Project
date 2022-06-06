import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CreateEventBtn = () => {
  const [userEvents, setUserEvents] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSports();
    actions.getEvents();
    actions.setEvents();
  }, []);

  return (
    <div>
      <button
        type="button"
        className="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Crear evento
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="d-flex align-content-center">
                <input
                  id="name"
                  type="text"
                  aria-label="Nombre"
                  placeholder="Nombre del Evento"
                  className="input-group mb-3 border-0 d-flex align-content-center"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, name: e.target.value });
                  }}
                />
              </h3>

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Ciudad
                </label>
                <select
                  className="form-select "
                  id="Ciudad"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, city: e.target.value });
                  }}
                >
                  <option>Ciudad</option>
                  <option value="1">Barcelona</option>
                  <option value="2">Cadiz</option>
                  <option value="3">Granada</option>
                </select>
              </div>

              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Pistas
                </label>

                <select
                  className="form-select"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, pista: e.target.value });
                  }}
                >
                  <option></option>;
                  {store.pistas.map((pista) => {
                    return <option key={pista.id}>{pista.name}</option>;
                  })}
                </select>
              </div>

              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25"
                  htmlFor="inputGroupSelect01"
                >
                  Deporte
                </label>
                <select
                  className="form-select"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, sport: e.target.value });
                  }}
                >
                  <option></option>;
                  {store.sports.map((sport) => {
                    return <option key={sport.id}>{sport.name}</option>;
                  })}
                </select>
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25 border-3 border-light"
                  htmlFor="inputGroupSelect01"
                >
                  Dirección
                </label>
                <input
                  className="w-75 border-3 border-light rounded ps-2 pe-2"
                  type="address"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, address: e.target.value });
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25 border-2 border-light"
                  htmlFor="inputGroupSelect01"
                >
                  Fecha
                </label>
                <input
                  className="w-75 border-2 border border-light rounded ps-2 pe-2"
                  type="date"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, date: e.target.value });
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <label
                  className="input-group-text w-25 border-2 border-light"
                  htmlFor="inputGroupSelect01 time"
                >
                  Hora
                </label>

                <input
                  className="w-75 border-2 border border-light rounded ps-2 pe-2"
                  type="time"
                  onChange={(e) => {
                    setUserEvents({ ...userEvents, time: e.target.value });
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control w-25"
                  id="inputGroupFile01"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="3"
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
                className="btn btn-warning w-50 content-center"
                onClick={() => {
                  actions.setEvents();
                }}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
