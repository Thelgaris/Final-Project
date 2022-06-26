import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/homepageafterlogin.css";
import { EventsComponent } from "../component/eventsComponent";
import { ProfileComp } from "../component/profileComp";
import { StravaData } from "../component/stravaData";

import { EventInfo } from "../component/eventInfo";
import { PistaInfo } from "../component/pistaInfo";
import { Followers } from "../component/followers";

export const Homepageafterlogin = () => {
  return (
    <div className="text-center mt-5">
      <div className="row d-flex justify-content-center container-fluid">
        <div className="d-flex col">
          <ProfileComp />
        </div>

        <div className=" d-flex col">
          <StravaData />
        </div>
      </div>
      <div className=" row d-flex container-fluid">
        <div className="col-3 mt-4">
          <EventsComponent />
        </div>
        <div className="col-8 d-inline">
          <img
            className=" mt-4 mb-4 rounded"
            src="https://placebeard.it/640x360"
            alt=""
          />
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
