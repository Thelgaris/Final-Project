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
    <div className="text-center mt-5">
      <div className="row d-flex container-fluid w-auto">
        <div className="d-inline w-auto">
          <ProfileComp />
        </div>

        <div className=" d-inline w-auto justify-content-center">
          <StravaData />
        </div>
      </div>
      <div className="row d-flex container-fluid w-auto">
        <div className="d-inline w-auto mt-4">
          <EventsComponent />
        </div>
        <div className="col d-inline">
          <img
            className=" mt-4 mb-4 rounded"
            src="https://placebeard.it/640x360"
            alt=""
          />
        </div>
        <div>
          <PistaYeventTab />
        </div>
      </div>
    </div>
  );
};
