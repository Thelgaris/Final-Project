import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <div className="row justify-content-center">
        <div className="jumbotron jumbotron-fluid w-50">
          <div className="container">
            <h1 className="display-4">PICKATEAM</h1>
            <p className="lead">
              <h2 style={{ color: "gray" }}>
                En Pickateam queremos crear una comunidad de deportistas, a
                través de la cual ayudarte a encontrar nuevas personas, nuevos
                jugadores y, por qué no, nuevos equipos.
              </h2>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{ width: "300px", marginBottom: "10px" }}
            >
              <img
                className="card-img-top"
                src="https://placebeard.it/640x360"
                alt="This is an image"
              />
              <div className="card-body">
                <h5 className="card-title">BUSCA TU CIUDAD</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ width: "300px", marginBottom: "10px" }}
            >
              <img
                className="card-img-top"
                src="https://placebeard.it/640x360"
                alt="This is an image"
              />
              <div className="card-body">
                <h5 className="card-title">ENCUENTRA TU LUGAR</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ width: "300px", marginBottom: "10px" }}
            >
              <img
                className="card-img-top"
                src="https://placebeard.it/640x360"
                alt="This is an image"
              />
              <div className="card-body">
                <h5 className="card-title">CREA TU EVENTO</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{ width: "300px", marginBottom: "10px" }}
            >
              <img
                className="card-img-top"
                src="https://placebeard.it/640x360"
                alt="This is an image"
              />
              <div className="card-body">
                <h5 className="card-title">EMPIEZA A JUGAR</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="d-grid gap-2 col-6 mx-auto mt-5 mb-5">
          <Link to="/register">
            <button className="btn btn-warning text-white" type="button">
              REGISTRATE
            </button>
          </Link>
          <Link to="/login">
            <button className="btn btn-warning text-white" type="button">
              LOGIN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
