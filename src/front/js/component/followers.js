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
            Seguidores
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
            Siguiendo
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
            Sugeridos
          </button>
        </li>
      </ul>

      <div className="tab-content row ">
        {showModalX == true ? (
          <div className=" " role="tabpanel" aria-labelledby="pills-home-tab">
            <div
              className="xscroll justify-content-center dropContainer border-1 rounded-pill"
              style={{ width: "500px" }}
            >
              {store.userFollowers.map((X) => {
                return (
                  <div
                    id={X.id}
                    className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3"
                    style={{ width: "12rem", height: "8rem" }}
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
                          Follow
                        </button>
                      ) : (
                        <button
                          href="#"
                          className="btn-sm btn-warning genbuttons w-100 rounded-3"
                          onClick={(e) => {
                            actions.setFollowers(X.id);
                          }}
                        >
                          Unfollow
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
              className="xscroll justify-content-center dropContainer border-1 rounded-pill"
              style={{ width: "500px" }}
            >
              {store.userFollowing.map((Y) => {
                console.log(Y);
                return (
                  <div
                    className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3"
                    id={Y.id}
                    style={{
                      width: "12rem",
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
                        {Y.name}
                      </p>

                      <button
                        href="#"
                        className="btn-sm btn-warning genbuttons w-100 rounded-3"
                      >
                        Unfollow
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
                className="xscroll justify-content-center dropContainer border-1 rounded-pill"
                style={{ width: "500px" }}
              >
                {store.users.map((Z) => {
                  return (
                    <div
                      className="dropcard h-100 ms-1 me-1 mt-5 mb-5 d-flex bg-light rounded-3 ms-5"
                      id="suggestionsList"
                      key={Z.id}
                      style={{ width: "12rem", height: "6rem" }}
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
                            {Z.detail.name}
                          </p>
                          {/* { !store.users.map ((e)=> e.id).includes(Z.id) ? : */}
                          <button
                            href="#"
                            className="btn-sm btn-warning genbuttons w-100 rounded-3"
                            onClick={(e) => {
                              actions.setFollowers(Z.id);
                            }}
                          >
                            Follow
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
