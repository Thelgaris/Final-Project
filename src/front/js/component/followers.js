import React from "react";
import { Link } from "react-router-dom";

export const Followers = () => {
  return (
    <div className="row">
      <ul
        className="nav nav-pills justify-content-center d-flex"
        role="tablist"
      >
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link btn active btn-bg-light w-100 text-black"
            id="followers"
            data-bs-toggle="pill"
            data-bs-target="#followersList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {}}
          >
            Seguidores
          </button>
        </li>
        <li className="nav-item col-4 " role="presentation">
          <button
            type="button "
            className="nav-link btn btn-bg-light w-100 text-black"
            id="following"
            data-bs-toggle="pill"
            data-bs-target="#followingList"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={() => {}}
          >
            Siguiendo
          </button>
        </li>
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link btn btn-bg-light w-100 text-black"
            id="suggestions"
            data-bs-toggle="pill"
            data-bs-target="#suggestionsList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {}}
          >
            Sugeridos
          </button>
        </li>
      </ul>
      <div className="tab-content row " id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="followersList"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row mt-5 d-flex justify-content-center">
            <div className="card ms-2 me-2 border-0" style={{ width: "14rem" }}>
              <img
                src="https://picsum.photos/300/200"
                className="card-img-top rounded-circle "
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">Nombre</h4>
                <h5 className="card-title">Ciudad</h5>

                <button href="#" className="btn btn-warning w-100">
                  Seguir
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade "
          id="followingList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row mt-5 d-flex justify-content-center">
            <div
              className="card ms-2 me-2 border-0 "
              style={{ width: "14rem" }}
            >
              <img
                src="https://picsum.photos/300/200"
                className="card-img-top rounded-circle"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">Nombre</h4>
                <h5 className="card-title">Ciudad</h5>

                <button href="#" className="btn btn-warning w-100">
                  Dejar de seguir
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade "
          id="suggestionsList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row mt-5 d-flex justify-content-center">
            <div className="card ms-2 me-2 border-0" style={{ width: "14rem" }}>
              <img
                src="https://picsum.photos/300/200"
                className="card-img-top rounded-circle"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title">Nombre</h4>
                <h5 className="card-title">Ciudad</h5>

                <button href="#" className="btn btn-warning w-100">
                  Seguir
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
