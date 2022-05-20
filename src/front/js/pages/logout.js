import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/login.css";

export const Logout = () => {
  return (
    <div className="container">
      <h3>Ha cerrado sesión</h3>
      <Link to="/">
        <h1>Volver a la pagina principal</h1>
      </Link>
    </div>
  );
};
