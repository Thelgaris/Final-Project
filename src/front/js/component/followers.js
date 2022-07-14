import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/followers.css";
import { Context } from "../store/appContext";
import "../../styles/followers.css";
import "../../styles/profile.css";

export const Followers = () => {
  const { store, actions } = useContext(Context);
  const [showModalX, setShowModalX] = useState(null);
  const [showModalY, setShowModalY] = useState(null);
  const [showModalZ, setShowModalZ] = useState(null);
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
            className="nav-link btn-sm btn text-black btn1"
            id="followersList"
            data-bs-toggle="pill"
            data-bs-target="#followersList"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {
              setShowModalX(!showModalX);
              setShowModalY(false);
              setShowModalZ(false);
            }}
          >
            <h6> Seguidores</h6>
          </button>
        </li>
        <li className="nav-item w-auto" role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn  text-black btn1"
            id="followingList"
            data-bs-toggle="pill"
            data-bs-target="#followingList"
            role="tab"
            aria-controls="pills-profile"
            onClick={() => {
              setShowModalX(false);
              setShowModalY(!showModalY);
              setShowModalZ(false);
            }}
          >
            <h6> Siguiendo</h6>
          </button>
        </li>
        <li className="nav-item w-auto" role="presentation">
          <button
            type="button"
            className="nav-link btn-sm btn text-black btn1"
            id="suggestionsList"
            data-bs-toggle="pill"
            data-bs-target="#suggestionsList"
            role="tab"
            aria-controls="pills-home"
            onClick={() => {
              setShowModalX(false);
              setShowModalY(false);
              setShowModalZ(!showModalZ);
            }}
          >
            <h6> Sugeridos</h6>
          </button>
        </li>
      </ul>

      <div className="tab-content row">
        {showModalX == true ? (
          <div
            className="col-10 offset-1 "
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div
              className="xscroll  border-1 rounded-pill "
              // style={{ width: "600px" }}
            >
              {store.userFollowers.map((X) => {
                return (
                  <div
                    className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3 perfil"
                    id={X.id}
                    style={{
                      width: "14rem",
                      height: "8rem",
                    }}
                    key={X.id}
                  >
                    <img
                      src={X.profile_image_url}
                      className="p-2 justify-content-center rounded-circle"
                      alt="..."
                      style={{ width: "6rem", height: "6rem" }}
                    />
                    <div className="card-body me-2">
                      <p
                        className="card-title justify-content-center text-center"
                        style={{ height: "2em" }}
                      >
                        <h6>{X.name}</h6>
                      </p>

                      {!store.userFollowing.map((e) => e.id).includes(X.id) ? (
                        <button
                          href="#"
                          className="btn-sm btn-warning  w-100 rounded-3 genbuttons"
                          onClick={(e) => {
                            actions.setFollowers(X.id);
                          }}
                        >
                          <h6> Follow</h6>
                        </button>
                      ) : (
                        <button
                          href="#"
                          className="btn-sm btn-warning  w-100 rounded-3 genbuttons"
                          onClick={(e) => {
                            actions.setUnFollow(X.id);
                          }}
                        >
                          <h6> Unfollow</h6>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {showModalY == true ? (
          <div
            className="col-10 offset-1"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div
              className="xscroll  border-1 rounded-pill"
              // style={{ width: "500px" }}
            >
              {store.userFollowing.map((Y) => {
                return (
                  <div
                    className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3 perfil"
                    id={Y.id}
                    style={{
                      width: "14rem",
                      height: "8rem",
                    }}
                    key={Y.id}
                  >
                    <img
                      src={Y.profile_image_url}
                      className="p-2 justify-content-center rounded-circle"
                      alt="..."
                      style={{ width: "6rem", height: "6rem" }}
                    />
                    <div className="card-body me-2">
                      <p
                        className="card-title justify-content-center text-center"
                        style={{ height: "2em" }}
                      >
                        <h6>{Y.name}</h6>
                      </p>

                      <button
                        href="#"
                        className="btn-sm btn-warning  w-100 rounded-3 genbuttons"
                        onClick={() => {
                          actions.setUnFollow(Y.id);
                        }}
                      >
                        <h6>Unfollow</h6>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {showModalZ == true ? (
          <div
            className="col-10 offset-1 "
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="dropbody">
              <div
                className="xscroll  border-1 rounded-pill"
                // style={{ width: "500px" }}
              >
                {store.users.map((Z) => {
                  return (
                    <div
                      className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3 ms-5 perfil"
                      id="suggestionsList"
                      key={Z.id}
                      style={{ width: "14rem", height: "6rem" }}
                    >
                      <img
                        src={Z.detail.profile_image_url}
                        className="p-2 justify-content-center rounded-circle"
                        alt="..."
                        style={{ width: "6rem", height: "6rem" }}
                      />
                      <div
                        className="d-flex justify-content-center "
                        // style={{ width: "6rem", height: "2rem" }}
                      >
                        <div className="card-body me-2">
                          <p
                            className="card-title justify-content-center text-center"
                            style={{ height: "2em" }}
                          >
                            <h6>{Z.detail.name}</h6>
                          </p>
                          {/* { !store.users.map ((e)=> e.id).includes(Z.id) ? : */}
                          <button
                            href="#"
                            className="btn-sm btn-warning  w-100 rounded-3 genbuttons"
                            onClick={(e) => {
                              actions.setFollowers(Z.id);
                            }}
                          >
                            <h6>Follow</h6>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

Followers.propTypes = {
  match: PropTypes.object,
};
