import React, { useState, useContext, useEffect } from "react";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";
/*hola uapa*/

export const Sportmodal = ({ setSport }) => {
  const { store, actions } = useContext(Context);

  // useEffect(() => {
  //   actions.getSports();
  // }, []);

  return (
    <div className="mx-auto">
      <button
        type="button"
        className="btn deportesbtn btn-white mx-auto w-25"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle1"
      >
        Deportes
      </button>
      <div
        className="modal fade "
        id="exampleModalToggle1"
        tabIndex="-1"
        aria-labelledby="exampleModalToggleLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Deportes que practico
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                {store.sports.map((sport) => {
                  return (
                    <div key={sport.id} className="sportcheck">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={sport.id}
                        placeholder={sport.name}
                        id={sport.name}
                        onClick={() => {
                          setSport(sport.name);
                        }}
                      />
                      <label className="form-check-label">{sport.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn modalbtn2 btn-secondary "
                data-bs-dismiss="modal"
                type="submit"
              >
                Guardar
              </button>
              <button
                className="btn modalbtn btn-primary"
                data-bs-target="#exampleModalToggle22"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Mis deportes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade "
        id="exampleModalToggle22"
        tabIndex="-1"
        aria-labelledby="exampleModalToggleLabel22"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel22">
                Deportes que practico
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {store.getUserSports.map((sports, index) => {
                return (
                  <li key={index} style={{}}>
                    {sports}
                  </li>
                );
              })}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn modalbtn2 btn-secondary "
                data-bs-dismiss="modal"
                onClick={() => {}}
              >
                Guardar
              </button>
              <button
                type="button"
                className="btn modalbtn btn-primary"
                data-bs-target="#exampleModalToggle1"
                data-bs-toggle="modal"
              >
                Deportes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
