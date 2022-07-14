import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { EventInfo } from "./eventInfo";
import { PistaInfo } from "./pistaInfo";

export const PistaYeventTab = () => {
  return (
    <div className=" container-fluid justify-content-center">
      <ul
        className="nav nav-pills  d-flex justify-content-center col-6 offset-3 d-inline"
        role="tablist"
      >
        <li
          className="nav-item col-3 w-50 justify-content-center d-flex "
          role="presentation"
        >
          <button
            className="nav-link btn  text-black genbuttons btn1"
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
        <li
          className="nav-item col-3 d-flex w-50 justify-content-center"
          role="presentation"
        >
          <button
            type="button "
            className="nav-link btn text-black genbuttons btn1"
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
      <div className="tab-content row" id="pills-tabContent">
        <div
          className="tab-pane fade show justify-content-center"
          id="pistasList"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <PistaInfo />
        </div>
        <div
          className="tab-pane fade  justify-content-center"
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
