import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const ProfileComp = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="container-fluid h-auto ms-3" style={{ width: "300px" }}>
      <div className="card bg-white border-0">
        <Link to="/userprofile">
          <img
            src="https://picsum.photos/seed/picsum/50/50"
            className="card-img-top  rounded-circle p-5"
            alt="Foto Perfil"
          />
        </Link>
        <div className="card-body rounded ">
          <h4 className="card-title">
            {store.currentUser.detail ? store.currentUser.detail.name : "N/A"}
          </h4>
          <h5 className="card-text">
            {store.currentUser.detail ? store.currentUser.detail.city : "N/A"}
          </h5>
        </div>
        <div className="d-flex">
          <ul className="list-group list-group-flushborder-0">
            <li className="list-group-item  border-0">Siguiendo</li>
            <li className="list-group-item  border-0">
              {store.currentUser.followings
                ? store.currentUser.followings
                : "0"}
            </li>
          </ul>
          <ul className="list-group list-group-flush border-0">
            <li className="list-group-item  border-0">Seguidores</li>
            <li className="list-group-item  border-0 ">
              {store.currentUser.followers ? store.currentUser.followers : "0"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
