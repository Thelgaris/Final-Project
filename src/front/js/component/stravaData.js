import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { StravaConnect } from "./stravaConnect";

export const StravaData = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();
  return (
    <div className="container-fluid border-0 w-auto ms-3 mt-5 justify-content-center">
      <div className="card bg-white border-0 ">
        <ul
          className="nav nav-pills rounded d-flex"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <i
              className="fas fa-running nav-link btn active btn-warning text-black"
              style={{}}
              id="running"
              data-bs-toggle="pill"
              data-bs-target="#running-data"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => {}}
            ></i>
          </li>
          <li className="nav-item" role="presentation">
            <i
              className="fas fa-biking nav-link btn text-black"
              type="button "
              id="cycling"
              data-bs-toggle="pill"
              data-bs-target="#cycling-data"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => {}}
            ></i>
          </li>
          <li className="nav-item" role="presentation">
            <i
              className="fas fa-swimmer nav-link btn   text-black"
              type="button "
              id="activities"
              data-bs-toggle="pill"
              data-bs-target="#swimming-data"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => {}}
            ></i>
          </li>
          <li className="nav-item" role="presentation">
            <i
              className="far fa-star nav-link btn text-black"
              type="button "
              id="activities"
              data-bs-toggle="pill"
              data-bs-target="#activites-data"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => {}}
            ></i>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active t mt-4 pb-4"
            id="running-data"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div>Esta semana</div>
            <div>23Km</div>
            <div>2h 40m 13s</div>
          </div>
          <div
            className="tab-pane fade  mt-4 pb-4"
            id="cycling-data"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>Esta semana</div>
            <div>167Km</div>
            <div>2h 40m 13s</div>
          </div>
          <div
            className="tab-pane fade  mt-4 pb-4"
            id="swimming-data"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>Esta semana</div>
            <div>4km Nadando</div>
            <div>1h 10m 24s</div>
          </div>
          <div
            className="tab-pane fade  mt-4 pb-4"
            id="activites-data"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div></div>
            <div>
              {" "}
              <i className="fas fa-h1">{store.userEvents.length} Eventos</i>
            </div>
            <div>
              <i className="fas fa-h1">14 Actividades</i>
            </div>
          </div>
        </div>
        <div className="d-grid col-6 mx-auto mb-2">
          <Link to="/profile">
            <button
              type="button "
              className="genbuttons btn btn-warning text-black"
            >
              <i className="fas fa-h1">+ Info</i>
            </button>
          </Link>
          <StravaConnect />
        </div>
      </div>
    </div>
  );
};
