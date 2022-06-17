import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
export const Footer = () => (
  <footer className="text-center text-lg-start bg-light text-muted">
    <div>
      <section className="d-flex justify-content-center justify-content-lg-between p-2">
        <div className="me-5 d-none d-lg-block fst-italic fs-6"></div>
        <div>
          <a
            href="https://www.facebook.com/4GeeksAcademyES"
            target="_blank"
            className="me-4 text-reset"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/4geeksacademyes/"
            target="_blank"
            className="me-4 text-reset"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            className="me-4 text-reset"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
      <section className="data">
        <div className="container text-center text-md-start">
          <div className="row">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-2">
              <Link
                to="/nuestraWeb"
                className="linkfooter text-decoration-none"
              >
                <h6 className="text-uppercase fw-light fs-6">COMO FUNCIONA</h6>
              </Link>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">
              <Link
                to="/nuestraWeb"
                className="linkfooter text-decoration-none"
              >
                <h6 className="text-uppercase fw-light fs-6">NUESTRA WEB</h6>
              </Link>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
              <Link
                to="/nuestraWeb"
                className="linkfooter text-decoration-none"
              >
                <h6 className="text-uppercase fw-light fs-6">QUIENES SOMOS</h6>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright text-center pb-1 fs-6">
        © 2022 Pickateam: creado a traves del curso de <span> </span>
        <a
          className="text-reset fw-bold"
          href="https://4geeksacademy.com/es/inicio"
          target="_blank"
        >
          4GeeksAcademy
        </a>
      </div>
=======

  <footer className="bg-light sticky-bottom">
    <div className="container p-2">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <Link to="/nuestraWeb" className="text-decoration-none text-dark">
          <li className="nav-item px-2">Cómo funciona PICKATEAM</li>
        </Link>
        <Link to="/nuestraWeb" className="text-decoration-none text-dark">
          <li className="nav-item px-2">Nuestra web</li>
        </Link>
        <Link to="/nuestraWeb" className="text-decoration-none text-dark">
          <li className="nav-item px-2">Quiénes somos</li>
        </Link>
        <Link to="/nuestraWeb" className="text-decoration-none text-dark">
          <li className="nav-item px-2">Contacta con nosotros</li>
        </Link>
      </ul>
      <p className="text-center text-muted">2022 PICKATEAM</p>
    </div>
  </footer>
);
