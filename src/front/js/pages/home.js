import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
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
      <div className="container-fluid d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col">
            <div
              className="card"
              style={{
                width: "300px",
                height: "380px",
                marginBottom: "10px",
                border: "none",
              }}
            >
              <div className="imgCard">
                <img
                  className="card-img-top img-fluid"
                  src="https://static.vecteezy.com/system/resources/previews/000/265/199/non_2x/vector-magnifying-glass-on-world-map.jpg"
                  alt="This is an image"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">BUSCA TU CIUDAD</h5>
                <p className="card-text">
                  ¿Dónde quieres practicar deporte? Entérate de qué eventos
                  deportivos se van a celebrar en tu ciudad o en aquella a la
                  que vas a viajar.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{
                width: "300px",
                height: "380px",
                marginBottom: "10px",
                border: "none",
              }}
            >
              <div className="imgCard">
                <img
                  className="card-img-top img-fluid"
                  src="https://play-lh.googleusercontent.com/Kf8WTct65hFJxBUDm5E-EpYsiDoLQiGGbnuyP6HBNax43YShXti9THPon1YKB6zPYpA"
                  alt="This is an image"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">ENCUENTRA TU LUGAR</h5>
                <p className="card-text">
                  Recorre la ciudad en busca de instalaciones y zonas donde
                  quieras practicar deporte y visualiza los eventos que hay en
                  tu ciudad.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{
                width: "300px",
                height: "380px",
                marginBottom: "10px",
                border: "none",
              }}
            >
              <div className="imgCard">
                <img
                  className="card-img-top img-fluid"
                  src="http://alcalalarealesdeporte.com/wp-content/uploads/2014/09/valores-1.jpg"
                  alt="This is an image"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">CREA TU EVENTO</h5>
                <p className="card-text">
                  ¡También podrás crear el tuyo! Crea tu evento si buscas gente
                  con la que practicar deporte y no hay aun nada creado.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card"
              style={{
                width: "300px",
                height: "380px",
                marginBottom: "10px",
                border: "none",
              }}
            >
              <div className="imgCard">
                <img
                  className="card-img-top img-fluid"
                  src="https://www.imdsg.es/wp-content/uploads/fondo.jpg"
                  alt="This is an image"
                />
              </div>

              <div className="card-body">
                <h5 className="card-title">EMPIEZA A JUGAR</h5>
                <p className="card-text">
                  Asiste a los eventos y conoce gente nueva, descubre nuevos
                  deportes y crea comunidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 col-6-sm mx-auto mt-5 mb-5">
        <Link to="/register">
          <button
            className="btn btn-warning btn-sm text-white w-25"
            type="button"
          >
            REGISTRATE
          </button>
        </Link>
        <Link to="/login">
          <button
            className="btn btn-warning btn-sm text-white w-25"
            type="button"
          >
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
};
