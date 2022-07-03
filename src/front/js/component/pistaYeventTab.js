import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { EventInfo } from "./eventInfo";
import { PistaInfo } from "./pistaInfo";

export const PistaYeventTab = () => {
  return (
    <div className=" container-fluid">
      <ul
        className="nav nav-pills  d-flex justify-content-center row "
        role="tablist"
      >
        <li className="nav-item col-6 d-flex" role="presentation">
          <button
            className="nav-link btn  btn-bg-light  text-black "
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
        <li className="nav-item col-6 d-flex" role="presentation">
          <button
            type="button "
            className="nav-link btn btn-bg-light text-black "
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
