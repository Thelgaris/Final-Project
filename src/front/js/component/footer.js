import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
export const Footer = () => (
  <footer className="bg-light">
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
