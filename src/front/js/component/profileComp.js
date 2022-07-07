import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/profile.css";

export const ProfileComp = () => {
  const { store, actions } = useContext(Context);
  return (
    <div
      className="container-fluid h-auto ms-3 mt-5"
      style={{ width: "300px" }}
    >
      <div className="card border-0 perfil">
        <Link to="/userprofile">
          <img
            src="https://picsum.photos/seed/picsum/50/50"
            className="card-img-top  rounded-circle perfilImg "
            style={{ padding: "5%" }}
            alt="Foto Perfil"
          />
        </Link>
        <div className="card-body rounded ">
          <h4 className="card-title">
            <i class="fas fa">
              {store.currentUser.detail ? store.currentUser.detail.name : "N/A"}
            </i>
          </h4>

          <h5 className="card-text">
            <i class="fas fa">
              {store.currentUser.detail ? store.currentUser.detail.city : "N/A"}
            </i>
          </h5>
        </div>
        <div className="d-flex">
          <ul className="list-group list-group-flushborder-0 justify-content-center">
            <li className="list-group-item  border-0 justify-content-center">
              <i className="fas-sm fa-h1 ">Siguiendo</i>
            </li>
            <li className="list-group-item  border-0 justify-content-center">
              <i className="fas fa-h1">
                {store.currentUser.followings
                  ? store.currentUser.followings.length
                  : "0"}
              </i>
            </li>
          </ul>
          <ul className="list-group list-group-flush border-0 justify-content-center">
            <li className="list-group-item  border-0 justify-content-center">
              {" "}
              <i className="fas-sm fa-h1">Seguidores</i>
            </li>
            <li className="list-group-item  border-0 justify-content-center">
              <i className="fas fa-h1">
                {store.currentUser.followers
                  ? store.currentUser.followers.length
                  : "0"}
              </i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
