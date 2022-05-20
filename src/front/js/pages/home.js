import React, { useContext } from "react";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <div className="row justify-content-center">
        <div className="jumbotron jumbotron-fluid w-50">
          <div className="container">
            <h1 className="display-4">PICKATEAM</h1>
            <p className="lead">
              PICKATEAM Es una app/web con la que puedes encontrar personas para
              hacer deporte, en la que se permite crear eventos o quedadas y
              permitir que otros usuarios puedan ser informados de los eventos
              creados y tengan la opción de, a través de un boton, informar al
              resto de que van a asistir. Como usuario puedes tanto crear como
              asistir a otros ya creados. La app/web presenta estadisticas e
              historial de datos relacionados con Strava, para deportes como
              ciclismo y running, de modo que puedas comparar con otros usuarios
              sus registros. Pensada para deportes en pistas públicas (o incluso
              privadas si los asistentes se ponen de acuerdo). Deportes como
              baloncesto, futbol, volleyball playa, ciclismo y running.
            </p>
          </div>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner rounded-3">
          <div className="carousel-item active">
            <img
              src="https://pix10.agoda.net/geo/city/5270/1_5270_02.jpg?ca=6&ce=1&s=1920x822"
              className="d-block w-100 img-fluid"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.musement.com/cover/0002/45/barcelona-jpg_header-144696.jpeg?w=1200&h=630&q=95&fit=crop"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/The_whole_Alhambra_Granada_Spain.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
