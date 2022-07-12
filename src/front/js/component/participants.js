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
      ></i>

      {showModal == true ? (
        <div className="position-absolute top-50 start-50 translate-middle mt-5 mb-5 align-middle">
          {store.participants.map((E) => {
            return (
              <div className="" tabIndex="-1">
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
                  <div className="d-flex justify-content-center ">
                    <div className="card-body me-2">
                      <p
                        className="card-title justify-content-center text-center"
                        style={{ height: "2em" }}
                      >
                        <i className="fas fa-sm">{E.detail.name}</i>
                      </p>
                      {!store.userFollowing.map((e) => e.id).includes(E.id) ? (
                        <button
                          href="#"
                          className="btn-sm btn-warning genbuttons w-100 rounded-3"
                          onClick={(e) => {
                            actions.setFollowers(E.id);
                          }}
                        >
                          <i className="fas fa-sm"> Follow</i>
                        </button>
                      ) : (
                        <button
                          href="#"
                          className="btn-sm btn-warning genbuttons w-100 rounded-3"
                          onClick={(e) => {
                            actions.setUnFollow(E.id);
                          }}
                        >
                          <i className="fas fa-sm"> Unfollow</i>
                        </button>
                      )}
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
