import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { EventInfo } from "./eventInfo";
import { PistaInfo } from "./pistaInfo";

export const PistaYeventTab = () => {
  return (
    <div className="row container-fluid">
      <ul
        className="nav nav-pills  d-flex justify-content-center "
        role="tablist"
      >
        <li className="nav-item " role="presentation">
          <button
            className="nav-link btn-sm  btn-bg-light w-100 text-black genbuttons"
            id="pistas"
            data-bs-toggle="pill"
            data-bs-target="#pistasList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {}}
          >
            Pistas
          </button>
        </li>
        <li className="nav-item " role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light w-100 text-black genbuttons"
            id="eventos"
            data-bs-toggle="pill"
            data-bs-target="#eventosList"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={() => {}}
          >
            Eventos
          </button>
        </li>
      </ul>
      <div className="tab-content row " id="pills-tabContent">
        <div
          className="tab-pane fade show  "
          id="pistasList"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <PistaInfo />
        </div>
        <div
          className="tab-pane fade "
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
