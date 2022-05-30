import React, { useState, useContext, useEffect } from "react";
import "../../styles/userprofile.css";
import { Context } from "../store/appContext";

export const Sportmodal = ({ user, setUser }) => {
  const [sportsData, setSportsData] = useState({});
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSports();
  }, []);

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
              <div>
                {store.sports.map((sport) => {
                  return (
                    <div key={sport.id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={sport.id}
                        placeholder={sport.name}
                        id="basketball"
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
      </div>
    </div>
  );
};
