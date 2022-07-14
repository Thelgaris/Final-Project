import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/followers.css";
import { Context } from "../store/appContext";
import "../../styles/followers.css";
import "../../styles/profile.css";
import { PistaInfo } from "./pistaInfo";
import { EventInfo } from "./eventInfo";

export const PistasYevents = () => {
  const { store, actions } = useContext(Context);
  const [showModalPistas, setShowModalPistas] = useState(null);
  const [showModalEvents, setShowModalEvents] = useState(null);

  const { id } = useParams();

  return (
    <div className="container-fluid justify-content-center">
      <ul
        className="nav nav-pills justify-content-center row gap-2"
        role="tablist"
      >
        <li className="nav-item w-auto gap-2" role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn text-black genbuttons"
            id="followersList"
            data-bs-toggle="pill"
            data-bs-target="#PistasList"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {
              setShowModalPistas(!showModalPistas);
              setShowModalEvents(false);
            }}
          >
            <i className="fas fa-sm">Pistas</i>
          </button>
        </li>
        <li className="nav-item w-auto gap-2" role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn  text-black "
            id="followingList"
            data-bs-toggle="pill"
            data-bs-target="#EventsList"
            role="tab"
            aria-controls="pills-profile"
            onClick={() => {
              setShowModalPistas(false);
              setShowModalEvents(!showModalEvents);
            }}
          >
            <i className="fas fa-sm">Eventos</i>
          </button>
        </li>
      </ul>

      <div className="tab-content row">
        {showModalPistas == true ? (
          <div
            className="xscroll  border-1 rounded-pill"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
            style={{ width: "600px" }}
          >
            {store.cityPistas.map((P) => {
              return (
                <div
                  className="dropcard h-100 mt-5 mb-5 d-flex bg-light rounded-3 perfil"
                  id={P.id}
                  style={{
                    width: "14rem",
                    height: "8rem",
                  }}
                  key={P.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="p-2 justify-content-center rounded-circle"
                    alt="..."
                    style={{ width: "6rem", height: "6rem" }}
                  />
                  <div className="card-body me-2">
                    <p
                      className="card-title justify-content-center text-center"
                      style={{ height: "2em" }}
                      onClick={() => {
                        <PistaInfo />;
                      }}
                    >
                      <i className="fas fa-sm">{P.name}</i>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        {showModalEvents == true ? (
          <div className="" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div
              className="xscroll  border-1 rounded-pill justify-content-center text-center offset-2"
              style={{ width: "500px" }}
            >
              {store.events.map((E) => {
                return (
                  <div
                    className="dropcard h-100  mt-5 mb-5 d-flex bg-light rounded-3 perfil justify-content-center text-center"
                    id={E.id}
                    style={{
                      width: "14rem",
                      height: "8rem",
                    }}
                    key={E.id}
                  >
                    <img
                      src="https://picsum.photos/300/200"
                      className="p-2 justify-content-center rounded-circle"
                      alt="..."
                      style={{ width: "6rem", height: "6rem" }}
                    />
                    <div className="card-body me-2">
                      <div
                        className="card-title justify-content-center text-center"
                        style={{ height: "2em" }}
                        onClick={() => {}}
                      >
                        <i className="fas fa-sm">
                          <EventInfo />;
                        </i>

                        <i className="fas fa-sm">{E.city}</i>

                        <i
                          className="fas fa-users p-2 mb-0 border-0 d-inline "
                          style={{ color: "#014f5a" }}
                        >
                          {E.participants}
                        </i>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
