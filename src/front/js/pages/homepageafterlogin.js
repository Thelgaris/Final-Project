import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/homepageafterlogin.css";
import { EventsComponent } from "../component/eventsComponent";
import { ProfileComp } from "../component/profileComp";
import { StravaData } from "../component/stravaData";
import { Maps } from "../component/maps";

import { EventInfo } from "../component/eventInfo";
import { PistaInfo } from "../component/pistaInfo";
import { Followers } from "../component/followers";

export const Homepageafterlogin = () => {
  return (
    <div className="text-center mt-5">
      <div className="row justify-content-center">
        <div className="container-fluid row">
          <div className="col-3 d-inline">
            <ProfileComp />
          </div>
          <div className="col-6">
            <h1 className="">PICKATEAM</h1>
            <div className="d-flex mt-5">
              <h2 style={{ color: "gray" }}>
                En Pickateam queremos crear una comunidad de deportistas, a
                través de la cual ayudarte a encontrar nuevas personas, nuevos
                jugadores y, por qué no, nuevos equipos.
              </h2>
            </div>
          </div>
          <div className="col-3 mt-4"></div>
        </div>
      </div>
      <div className="button-container container-fluid row d-flex">
        <div className="col-3 mt-4 d-grid">
          <StravaData />
        </div>
        <div className="col-6 ">
          <Maps />
        </div>
        <div className="col-2 mt-4">
          <EventsComponent />
        </div>
      </div>
      <div className="row">
        <ul
          className="nav nav-pills  d-flex justify-content-center "
          role="tablist"
        >
          <li className="nav-item col-2" role="presentation">
            <button
              className="nav-link btn  btn-bg-light w-100 text-black"
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
          <li className="nav-item col-2 " role="presentation">
            <button
              type="button "
              className="nav-link btn btn-bg-light w-100 text-black"
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
            className="tab-pane fade show "
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
    </div>
  );
};
