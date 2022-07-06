import React, { useState, useContext, useEffect } from "react";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";

export const Sportmodal = ({ setSport }) => {
  const { store, actions } = useContext(Context);

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
                        id={sport.id}
                        onClick={(e) => {}}
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
                onClick={(e) => {}}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
