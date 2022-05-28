import React, { useState } from "react";
import "../../styles/userprofile.css";

export const Sportmodal = ({ user, setUser }) => {
  const [sportsData, setSportsData] = useState({});

  const getSports = async () => {
    const response = await fetch(
      "https://3001-thelgaris-finalproject-jj1n5tchp6y.ws-eu46.gitpod.io/api/sports",
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(sportsData),
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="mx-auto">
      <button
        type="button"
        className="btn deportesbtn btn-white mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Deportes
      </button>
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
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
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="baloncesto"
                  id="basketball"
                  onClick={(e) => {
                    setSportsData({
                      ...sportsData,
                      basketball: e.target.value,
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="basketball">
                  Baloncesto
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="futbol"
                  id="football"
                  onClick={(e) => {
                    setSportsData({ ...sportsData, football: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="football">
                  Futbol
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="running"
                  id="running"
                  onClick={(e) => {
                    setSportsData({ ...sportsData, running: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="running">
                  Running
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="cycling"
                  id="cycling"
                  onClick={(e) => {
                    setSportsData({ ...sportsData, cycling: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="cygling">
                  Cycling
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="beach_volley"
                  id="beach_volley"
                  onClick={(e) => {
                    setSportsData({
                      ...sportsData,
                      beach_volley: e.target.value,
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="cygling">
                  Beach Volley
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="tennis"
                  id="tennis"
                  onClick={(e) => {
                    setSportsData({ ...sportsData, tennis: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="cygling">
                  Tennis
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value=""
                  placeholder="padel"
                  id="padel"
                  onClick={(e) => {
                    setSportsData({ ...sportsData, padel: e.target.value });
                  }}
                />
                <label className="form-check-label" htmlFor="cygling">
                  Padel
                </label>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn modalbtn2 btn-secondary "
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn modalbtn btn-primary"
                onClick={() => {
                  getSports();
                }}
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
