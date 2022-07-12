import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/homepageafterlogin.css";
import { EventsComponent } from "../component/eventsComponent";
import { ProfileComp } from "../component/profileComp";
import { StravaData } from "../component/stravaData";
import { Maps } from "../component/maps";

import { PistaYeventTab } from "../component/pistaYeventTab";
import { PistaInfo } from "../component/pistaInfo";
import { Followers } from "../component/followers";
import { Participants } from "../component/participants";

export const Homepageafterlogin = () => {
  return (
    <div className="justify-content-center">
      <div className="row d-flex container-fluid w-100 position-relative">
        <div className=" w-auto justify-content-center text-center">
          <ProfileComp />
        </div>

        <div className="w-auto d-grid  h-auto d-flex justify-content-between mt-5 ms-5 me-5">
          <Maps />
        </div>
        <div className="d-grid w-auto  text-center mt-5  ">
          <EventsComponent />
        </div>
      </div>
      <div className="row d-flex flex-row container-fluid">
        <div className=" w-auto justify-content-center text-center">
          <StravaData />
         
        </div>
        <div className=" d-inline col-6 mt-5 ms-5">
          <PistaYeventTab />
        </div>
      </div>
    </div>
  );
};
