import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/followers.css";
import { Context } from "../store/appContext";
import "../../styles/followers.css";

export const Followers = () => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    actions.getUsers();
  }, []);

  return (
    <div className="container-fluid justify-content-center">
      <ul className="nav nav-pills justify-content-center row" role="tablist">
        <li className="nav-item w-auto " role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light text-black genbuttons"
            id="followers"
            data-bs-toggle="pill"
            data-bs-target="#followersList"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {}}
          >
            Seguidores
          </button>
        </li>
        <li className="nav-item w-auto" role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light btn-success  text-black genbuttons"
            data-bs-toggle="pill"
            data-bs-target="#followingList"
            role="tab"
            aria-controls="pills-profile"
            onClick={() => {}}
          >
            Siguiendo
          </button>
        </li>
        <li className="nav-item w-auto" role="presentation">
          <button
            className="nav-link btn-sm btn-bg-light btn-success text-black genbuttons"
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
          <div className="followers justify-content-center">
            {store.users.map((U) => {
              return (
                <div
                  id="followersList"
                  className="card ms-2 me-2 border-0 mt-5 mb-5 d-flex followers"
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
          className="tab-pane fade followers"
          id="followingList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="followers justify-content-center">
            {store.users.map((Y) => {
              return (
                <div
                  className="card ms-2 border-0 h-100 mt-5 mb-5 d-flex followers"
                  style={{
                    width: "10rem",
                    height: "10rem",
                    overflow: "scroll",
                  }}
                  key={Y.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title" style={{ height: "4rem" }}>
                      {Y.email}
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
          className="tab-pane fade followers"
          id="suggestionsList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="followers justify-content-center">
            {store.users.map((Z) => {
              return (
                <div
                  className="card border-0 h-100 mt-5 mb-5 d-flex followers"
                  style={{
                    width: "10rem",
                    height: "10rem",
                  }}
                  key={Z.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <p className="card-title" style={{ height: "4rem" }}>
                      {Z.email}
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
