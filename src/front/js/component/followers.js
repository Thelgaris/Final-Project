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
    <div className="row">
      <ul
        className="nav nav-pills justify-content-center d-flex"
        role="tablist"
      >
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link btn btn-bg-light w-100 text-black"
            data-bs-toggle="pill"
            data-bs-target="#followersList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            onClick={() => {}}
          >
            Seguidores
          </button>
        </li>
        <li className="nav-item col-4 " role="presentation">
          <button
            type="button "
            className="nav-link btn btn-bg-light w-100 text-black"
            data-bs-toggle="pill"
            data-bs-target="#followingList"
            role="tab"
            aria-controls="pills-profile"
            onClick={() => {}}
          >
            Siguiendo
          </button>
        </li>
        <li className="nav-item col-4" role="presentation">
          <button
            className="nav-link btn btn-bg-light w-100 text-black"
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
          <div className="row mt-5 d-flex justify-content-center">
            {store.users.map((U) => {
              return (
                <div
                  className="card ms-2 me-2 border-0"
                  style={{ width: "14rem" }}
                  key={U.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle "
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{U.email}</h4>
                    {store.currentUser.detail
                      ? store.currentUser.detail.name
                      : "N/A"}
                    <h5 className="card-title"></h5>

                    <button
                      href="#"
                      className="btn btn-warning w-100"
                      onClick={(e) => {
                        actions.setFollowers(e.id);
                      }}
                    >
                      Seguir
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
          <div className="row mt-5 d-flex justify-content-center ">
            {store.users.map((F) => {
              return (
                <div
                  className=" ms-2 me-2 border-0 card-group pt-2"
                  style={{ width: "14rem" }}
                  key={F.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">
                      {store.users.detail ? store.users.detail.name : "N/A"}
                    </h4>
                    <h5 className="card-title"></h5>

                    <button href="#" className="btn btn-warning w-100">
                      Dejar de seguir
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
          <div className="row mt-5 d-flex justify-content-center">
            {store.users.map((P) => {
              return (
                <div
                  className="card ms-2 me-2 border-0"
                  style={{ width: "14rem" }}
                  key={P.id}
                >
                  <img
                    src="https://picsum.photos/300/200"
                    className="card-img-top rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h4 className="card-title">{P.email}</h4>
                    <h5 className="card-title"></h5>

                    <button href="#" className="btn btn-warning w-100">
                      Seguir
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
