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
          <li className="nav-item bg-white" role="presentation">
            <button
              className="nav-link btnhpal active bg-warning  text-black"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
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
              className="nav-link btnhpal bg-success  text-black"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
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
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div>Esta semana</div>
            <div>23Km</div>
            <div>2h 40m 13s</div>
          </div>
          <div
            class="tab-pane fade bg-light mt-4 pb-4"
            id="pills-profile"
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
