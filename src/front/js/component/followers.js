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

  return (
    <div className="container-fluid justify-content-center">
      <ul className="nav nav-pills justify-content-center row" role="tablist">
        <li className="nav-item w-auto " role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light btn-success text-black genbuttons"
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
            <i className="fas fa-sm"> Seguidores</i>
          </button>
        </li>
        <li className="nav-item w-auto" role="presentation">
          <button
            type="button "
            className="nav-link btn-sm btn-bg-light btn-success  text-black genbuttons"
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
            <i className="fas fa-sm"> Siguiendo</i>
          </button>
        </li>
        <li className="nav-item w-auto" role="presentation">
          <button
            type="button"
            className="nav-link btn-sm btn-bg-light btn-success text-black genbuttons"
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
            <i className="fas fa-sm"> Sugeridos</i>
          </button>
        </li>
      </ul>

      <div className="tab-content row ">
        {showModalX == true ? (
          <div className=" " role="tabpanel" aria-labelledby="pills-home-tab">
            <div
              className="xscroll  border-1 rounded-pill"
              style={{ width: "500px" }}
            >
              {store.userFollowers.map((X) => {
                return (
                  <div
                    id={X.id}
                    className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3 perfil"
                    style={{ width: "14rem", height: "8rem" }}
                    key={X.id}
                  >
                    <img
                      src="https://picsum.photos/300/200"
                      className="p-2 justify-content-center rounded-circle"
                      alt="..."
                      style={{ width: "6rem", height: "6rem" }}
                    />
                    <div className="card-body me-2">
                      <p
                        className="card-title justify-content-center text-center"
                        style={{ height: "2rem" }}
                      >
                        {X.name ? X.name : "N/A"}
                      </p>
                      {!store.userFollowing.map((e) => e.id).includes(X.id) ? (
                        <button
                          href="#"
                          className="btn-sm btn-warning genbuttons w-100 rounded-3"
                          onClick={(e) => {
                            actions.setFollowers(X.id);
                          }}
                        >
                          <i className="fas fa-sm"> Follow</i>
                        </button>
                      ) : (
                        <button
                          href="#"
                          className="btn-sm btn-warning genbuttons w-100 rounded-3"
                          onClick={(e) => {
                            actions.setUnFollow(X.id);
                          }}
                        >
                          <i className="fas fa"> Unfollow</i>
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
          <div className="" role="tabpanel" aria-labelledby="pills-profile-tab">
            <div
              className="xscroll  border-1 rounded-pill"
              style={{ width: "500px" }}
            >
              {store.userFollowing.map((Y) => {
                console.log(Y);
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
                      src="https://picsum.photos/300/200"
                      className="p-2 justify-content-center rounded-circle"
                      alt="..."
                      style={{ width: "6rem", height: "6rem" }}
                    />
                    <div className="card-body me-2">
                      <p
                        className="card-title justify-content-center text-center"
                        style={{ height: "2em" }}
                      >
                        <i className="fas fa-sm">{Y.name}</i>
                      </p>

                      <button
                        href="#"
                        className="btn-sm btn-warning genbuttons w-100 rounded-3"
                        onClick={() => {
                          actions.setUnFollow(Y.id);
                        }}
                      >
                        <i className="fas fa-sm">Unfollow</i>
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
            className=" "
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="dropbody">
              <div
                className="xscroll  border-1 rounded-pill"
                style={{ width: "500px" }}
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
                        src="https://picsum.photos/300/200"
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
                            <i className="fas fa-sm">{Z.detail.name}</i>
                          </p>
                          {/* { !store.users.map ((e)=> e.id).includes(Z.id) ? : */}
                          <button
                            href="#"
                            className="btn-sm btn-warning genbuttons w-100 rounded-3"
                            onClick={(e) => {
                              actions.setFollowers(Z.id);
                            }}
                          >
                            <i className="fas fa-sm">Follow</i>
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
