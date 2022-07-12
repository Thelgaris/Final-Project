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
        <div className="modal " id="exampleModal" tabIndex="-1"
        >
          <div className="modal-dialog"
          style={{width: "400px"}}>
            <div className="modal-content">
              <div className="modal-header  d-grid gap-2 d-md-flex"
              style={{height: "50px"}}>
                <p className="d-flex mt-2">
                  <input
                    type="form-control"
                    aria-label="Nombre"
                    placeholder="Nombre del Evento"
                    className=" border-0 mt-2"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, name: e.target.value });
                    }}
                  />
                </p>
                <button
                  type="button"
                  className="btn-sm btn-secondary genbuttons btn-sm"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                    <i className="fas fa-h1">X</i>
                </button>
               
              </div>
              <div className="modal-body ">
                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <label
                    className="input-group-text d-flex text-center align-content-center"
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
                    <option></option>;
                    <option>Barcelona</option>;
                    <option>Cadiz</option>;
                  </select>
                </div>

                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <label
                    className="input-group-text "
                    htmlFor="inputGroupSelect01"
                  >
                    Dirección
                  </label>
                  <input
                    className=" border-3 border-light rounded ps-2 pe-2"
                    type="address"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, address: e.target.value });
                    }}
                  />
                </div>

                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <label
                    className="input-group-text"
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

                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <label
                    className="input-group-text col-4"
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
                
                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <label
                    className="input-group-text  "
                    style={{width: "100px"}}
                    htmlFor="inputGroupSelect01"
                  >
                    Fecha
                  </label>
                  <input
                    className="rounded ps-2 pe-2"
                    type="date"
                    value={date}
                    mindate={today}
                    startdate={today}
                    onChange={(e) => {
                      setDate(e.target.value);
                      console.log(date);
                      setUserEvents({ ...userEvents, date: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <label
                    className="input-group-text  border-2 border-light col-4"
                    htmlFor="inputGroupSelect01 time"
                  >
                    Hora
                  </label>

                  <input
                    className=" border-2 border border-light rounded ps-2 pe-2"
                    type="time"
                    onChange={(e) => {
                      setUserEvents({ ...userEvents, time: e.target.value });
                    }}
                  />
                </div>
                <div className="input-group mb-1 text-center align-content-center d-grid gap-2 d-md-flex"
                style={{height: "50px"}}>
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                  />
                </div>
                <div className="">
                  <textarea
                    className="form-control"
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
              <div className="modal-footer d-grid gap-2 col-6 mx-auto"
              style={{height: "50px"}}>
                <button
                  type="button"
                  className="btn btn-warning genbuttons"
                  
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
