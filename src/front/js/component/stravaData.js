import React from "react";
import { Link } from "react-router-dom";

export const StravaData = () => {
  return (
    <div className="container d-inline">
      <div
        className="card-fluid bg-light
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
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active bg-light mt-4 pb-4"
            id="running-data"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div>Esta semana</div>
            <div>23Km</div>
            <div>2h 40m 13s</div>
          </div>
          <div
            class="tab-pane fade bg-light mt-4 pb-4"
            id="cycling-data"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div>Esta semana</div>
            <div>167Km</div>
            <div>2h 40m 13s</div>
          </div>
        </div>
      </div>
    </div>
  );
};
