import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/homepageafterlogin.css";
import { EventsComponent } from "../component/eventsComponent";
export const Homepageafterlogin = () => {
  return (
    <div className="text-center mt-5">
      <div className="row justify-content-center">
        <div className="jumbotron jumbotron-fluid w-50">
          <div className="container-fluid">
            <h1 className="display-4">PICKATEAM</h1>
            <h2 style={{ color: "gray" }}>
              En Pickateam queremos crear una comunidad de deportistas, a través
              de la cual ayudarte a encontrar nuevas personas, nuevos jugadores
              y, por qué no, nuevos equipos.
            </h2>
          </div>
        </div>
      </div>
      <div className="button-container">
        <img
          className="city mt-4 mb-4"
          src="https://placebeard.it/640x360"
          alt=""
        />
        <input
          className="form-control input1 mx-auto mt-4 text-center"
          type="search"
          placeholder="Buscar ciudad"
          aria-label="Search"
        />
      </div>
      <ul
        className="nav nav-pills mb-3 d-flex justify-content-center"
        id="pills-tab"
        role="tablist"
      >
        <li className="nav-item bg-white" role="presentation">
          <button
            className="nav-link btnhpal active bg-primary  text-black"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Pistas
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            type="button "
            className="nav-link btnhpal bg-success  text-black"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Eventos
          </button>
        </li>
      </ul>
      <div className="sm">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active "
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
              >
                <EventsComponent />
              </div>
              <div
                className="tab-pane fade bg-success"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
              >
                aqui va el componente de los eventos
              </div>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};
