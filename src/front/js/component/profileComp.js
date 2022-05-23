import React from "react";
import { Link } from "react-router-dom";

export const ProfileComp = () => {
  return (
    <div className="container">
      <div className="row">
        <img
          src="https://picsum.photos/seed/picsum/300/200"
          className="img-fluid rounded-circle col-3"
          alt="Userprofilepicture"
        />
      </div>
      <div className="card col-3 mt-2" style={{ width: "20rem" }}>
        <div className="card-body">
          {/* Link to perfil usuario*/}
          <h5 className="card-title">Nombre usuario</h5>
          <div className="card">
            <i className="far fa-biking"></i>
            <i className="far fa-running"></i>
          </div>
        </div>
      </div>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page" href="#">
            Active
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link disabled">Disbaled</button>
        </li>
      </ul>

      <button href="#" className="btn btn-primary">
        History
      </button>
    </div>
  );
};
