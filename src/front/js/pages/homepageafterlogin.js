import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/homepageafterlogin.css";
import { EventsComponent } from "../component/eventsComponent";
import { ProfileComp } from "../component/profileComp";
import { StravaData } from "../component/stravaData";

import { PistaYeventTab } from "../component/pistaYeventTab";
import { PistaInfo } from "../component/pistaInfo";
import { Followers } from "../component/followers";

export const Homepageafterlogin = () => {
  return (
    <div className="text-center">
      <div className="row d-flex container-fluid mt-5">
        <div className="d-inline w-auto justify-content-center">
          <ProfileComp />
        </div>
        <div className="w-auto d-inline h-auto justify-content-center">
          <img
            className=" rounded mt-5 "
            src="https://placebeard.it/640x360"
            alt=""
          />
        </div>
      </div>
      <div className="row d-flex container-fluid mt-5">
        <div className="d-inline w-auto col-3">
          <EventsComponent />
        </div>
        <div className="col d-inline">
          <PistaYeventTab />
        </div>
      </div>
      <div className=" d-inline col-3 justify-content-center">
        <StravaData />
      </div>
    </div>
  );
};
