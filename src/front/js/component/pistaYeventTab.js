import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { EventInfo } from "./eventInfo";
import { PistaInfo } from "./pistaInfo";

export const PistaYeventTab = () => {
  return (
    <div className=" container-fluid row ">
      <ul
        className="nav nav-pills  d-flex justify-content-center col-6 offset-3"
        role="tablist"
      >
        <li
          className="nav-item col-3 justify-content-center d-flex"
          role="presentation"
        >
          <button
            className="nav-link btn  btn-warning  text-black genbuttons"
            id="pistas"
            data-bs-toggle="pill"
            data-bs-target="#pistasList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {}}
          >
            <i className="fas fa-h1 ">Pistas</i>
          </button>
        </li>
        <li className="nav-item col-3 d-flex" role="presentation">
          <button
            type="button "
            className="nav-link btn btn-warning text-black genbuttons"
            id="eventos"
            data-bs-toggle="pill"
            data-bs-target="#eventosList"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={() => {}}
          >
            <i className="fas fa-h1 ">Eventos</i>
          </button>
        </li>
      </ul>
      <div
        className="tab-content row d-flex justify-content-center"
        id="pills-tabContent"
      >
        <div
          className="tab-pane fade show col-6 justify-content-center"
          id="pistasList"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <PistaInfo />
        </div>
        <div
          className="tab-pane fade col-6 justify-content-center"
          id="eventosList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <EventInfo />
        </div>
      </div>
    </div>
  );
};
