import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
/* import { Auth0Provider } from "@auth0/auth0-react"; */

export const StravaButton = () => {
  const { REACT_APP_CLIENT_ID } = process.env;
  const redirectUrl = "https://localhost:3000/redirect";
  const scope = "read_all";

  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };

  return (
    <div>
      <button
        className="btn btn-light w-75"
        type="button"
        onClick={handleLogin}
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/323_Strava_logo-48.png"
          style={{
            width: "25px",
            height: "25px ",
            float: "left",
          }}
        />
        <span className="text-center">Registrar con Strava</span>
      </button>
    </div>
  );
};
