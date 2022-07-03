import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/followers.css";
import { Context } from "../store/appContext";

export const Followers = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    actions.getUsers();
  }, []);

  return (
    <div className="container-fluid">
      <ul className="nav nav-pills justify-content-center row" role="tablist">
        <li className="nav-item col-3 " role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light w-100 text-black genbuttons"
            data-bs-toggle="pill"
            data-bs-target="#followersList"
            role="tab"
            aria-controls="pills-profile"
            onClick={() => {}}
          >
            Seguidores
          </button>
        </li>
        <li className="nav-item col-3 " role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light btn-success w-100 text-black genbuttons"
            data-bs-toggle="pill"
            data-bs-target="#followingList"
            role="tab"
            aria-controls="pills-profile"
            onClick={() => {}}
          >
            Siguiendo
          </button>
        </li>
        <li className="nav-item col-3" role="presentation">
          <button
            className="nav-link btn-sm btn-bg-light btn-success w-100 text-black genbuttons"
            data-bs-toggle="pill"
            data-bs-target="#suggestionsList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            onClick={() => {}}
          >
            Sugeridos
          </button>
        </li>
      </ul>
      <div className="tab-content row ">
        <div
          className="tab-pane fade "
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="row d-flex justify-content-center mt-5">
            {store.users.map((U) => {
              return (
                <div
                  id="followersList"
                  className="card ms-2 me-2 border-0 mt-5 mb-5"
                  style={{ width: "10rem", height: "10rem" }}
                  key={U.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle "
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title" style={{ height: "4rem" }}>
                      {U.email}
                    </p>
                    {store.currentUser.detail
                      ? store.currentUser.detail.name
                      : "N/A"}

                    <button
                      href="#"
                      className="btn btn-success genbuttons w-100"
                      onClick={(e) => {
                        actions.setFollowers(e.id);
                      }}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="followingList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row d-flex justify-content-center mt-5">
            {store.users.map((F) => {
              return (
                <div
                  className="card ms-2 me-2 border-0 mt-5 mb-5"
                  style={{ width: "10rem", height: "10rem" }}
                  key={F.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title" style={{ height: "4rem" }}>
                      {store.users.detail ? store.users.detail.name : "N/A"}
                    </p>

                    <button
                      href="#"
                      className="btn btn-success genbuttons w-100"
                    >
                      Unfollow
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className="tab-pane fade "
          id="suggestionsList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="row d-flex justify-content-center mt-5">
            {store.users.map((P) => {
              return (
                <div
                  className="card ms-2 me-2 border-0  h-100 mt-5 mb-5"
                  style={{ width: "10rem", height: "10rem" }}
                  key={P.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title" style={{ height: "4rem" }}>
                      {P.email}
                    </p>

                    <button
                      href="#"
                      className="btn btn-success genbuttons w-100"
                    >
                      Follow
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Followers.propTypes = {
  match: PropTypes.object,
};
