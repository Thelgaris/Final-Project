import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";

export const Participants = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(null);
  return (
    <div
      className="container-fluid h-auto ms-3 mt-5"
      style={{ width: "300px" }}
    >
      <i
        className="fas fa-users p-2 mb-0 border-0 d-inline"
        style={{ color: "#014f5a" }}
        onClick={() => {
          setShowModal(!showModal);
        }}
      >
        
      </i>

      {showModal == true ? (
        <div>
          {store.userEvents.map((E) => {
            return (
              <div className="">
                <div
                  className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3 ms-5 perfil"
                  id="suggestionsList"
                  key={E.id}
                  style={{ width: "14rem", height: "6rem" }}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="p-2 justify-content-center rounded-circle"
                    alt="..."
                    style={{ width: "6rem", height: "6rem" }}
                  />
                  <div
                    className="d-flex justify-content-center "
                    // style={{ width: "6rem", height: "2rem" }}
                  >
                    <div className="card-body me-2">
                      <p
                        className="card-title justify-content-center text-center"
                        style={{ height: "2em" }}
                      >
                        <i className="fas fa-sm">{E.name}</i>
                      </p>
                      {/* { !store.users.map ((e)=> e.id).includes(Z.id) ? : */}
                      <button
                        href="#"
                        className="btn-sm btn-warning genbuttons w-100 rounded-3"
                        onClick={(e) => {}}
                      >
                        <i className="fas fa-sm">Follow</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
