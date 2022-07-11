import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

export const StravaConnect = () => {
  const { REACT_APP_CLIENT_ID } = process.env;
  const redirectUrl = "https://localhost:3000/redirect";
  const scope = "read_all";

  const handleLogin = () => {
    window.location = `http://www.strava.com/oauth/authorize?client_id=${REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${redirectUrl}/exchange_token&approval_prompt=force&scope=${scope}`;
  };
  const auth = () => {
    window.location =
      "https://www.strava.com/oauth/token?client_id=$87841&client_secret=b234669fa50691cb8c164f92fb761fc41a0b03ef&code=a3aa0216b66d468f1eff934a6d72c70d14c1f6f5&grant_type=authorization_code";
  };

  return (
    <div>
      <button
        className="btn btn-light w-75"
        type="button"
        onClick={() => {
          {
            handleLogin;
          }
        }}
      >
        <img
          src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/323_Strava_logo-48.png"
          style={{
            width: "25px",
            height: "25px ",
            float: "left",
          }}
        />
        <span className="text-center">Conectar con Strava</span>
      </button>
    </div>
  );
};
