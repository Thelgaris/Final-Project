import React from "react";

import { Link } from "react-router-dom";

export const StravaData = () => {
  return (
    <div className="container-fluid mt-5 ">
      <div
        className="card bg-white
      "
      >
        <ul
          className="nav nav-pills mb-3 d-flex rounded"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item " role="presentation">
            <button
              className="nav-link btn active btn-warning text-black"
              id="running"
              data-bs-toggle="pill"
              data-bs-target="#running-data"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
              onClick={() => {}}
            >
              Running
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button "
              className="nav-link btn  btn-warning text-black"
              id="cycling"
              data-bs-toggle="pill"
              data-bs-target="#cycling-data"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => {}}
            >
              Cycling
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              type="button "
              className="nav-link btn  btn-warning text-black"
              id="activities"
              data-bs-toggle="pill"
              data-bs-target="#activites-data"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
              onClick={() => {}}
            >
              Actividades
            </button>
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
            id="activites-data"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>Esta semana</div>
            <div>25 Eventos</div>
            <div>14 Actividades</div>
          </div>
        </div>
        <div className="d-grid col-6 mx-auto mb-2">
          <button type="button " className=" btn  btn-warning text-black">
            + Info
          </button>
        </div>
      </div>
    </div>
  );
};
