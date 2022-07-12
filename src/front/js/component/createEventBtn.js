import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

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
            <div className="modal-content">
              <div className="modal-header  d-flex d-inline row">
                <h3 className="d-flex col-10">
                  <input
                    type="form-control"
                    aria-label="Nombre"
                    placeholder="Nombre del Evento"
                    className=" border-0"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, name: e.target.value });
                    }}
                  />
                </h3>

                <button
                  type="button"
                  className="btn btn-light btn-sm col-1"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
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
                    <option></option>;<option>Barcelona</option>;
                    <option>Cadiz</option>;
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

                  {/* <div class="modal-dialog modal-dialog-centered">
                    <Calendar />
                  </div> */}

                  <input
                    className="w-75 border-2 border border-light rounded ps-2 pe-2"
                    type="date"
                    value={date}
                    mindate={today}
                    onChange={(e) => {
                      setDate(e.target.value);
                      console.log(date);
                      setUserEvents({ ...userEvents, date: e.target.value });
                    }}
                  ></input>
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
                  onClick={async () => {
                    await actions.setEvents(userEvents);
                    setShowModal(null);
                  }}
                >
                  Crear
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
