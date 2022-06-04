import React, { useState, useContext, useEffect } from "react";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";

export const Sportmodal = ({ user, setUser }) => {
  const [sportsData, setSportsData] = useState({});
  const [userSport, setUserSport] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSports();
    actions.setUserSports();
  }, []);

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
                        onClick={(e) => {
                          setSportsData({
                            ...sportsData,
                            sport: e.target.value,
                          });
                        }}
                      />
                      <label className="form-check-label">{sport.name}</label>
                    </div>
                  );
                })}
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
                      setUserSports;
                    }}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {store.userSports.map((sport) => {
        return (
          <div key={sport.id} className="usersport">
            <ul className="list-group list-group-horizontal">
              <li
                className="list-group-item"
                onChange={(e) => {
                  setUserSport({
                    ...userSport,
                    sport: e.target.value,
                  });
                }}
              >
                {sport.name}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};
