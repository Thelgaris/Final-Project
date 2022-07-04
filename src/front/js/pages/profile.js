import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Followers } from "../component/followers";
import { ProfileComp } from "../component/profileComp";
import { StravaData } from "../component/stravaData";
import { HistoryCard } from "../component/historyCard";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="justify-content-center">
      <div className="row d-flex container-fluid w-100">
        <div className="w-auto justify-content-center text-center ">
          <ProfileComp />
        </div>
        <div className=" d-inline w-auto justify-content-center text-center mt-5">
          <HistoryCard />
        </div>
      </div>
      <div className="row d-flex container-fluid">
        <div className="d-inline w-auto justify-content-center text-center">
          <StravaData />
        </div>

        <div className="w-auto  d-inline h-auto justify-content-center mt-5 ms-5">
          <Followers />
        </div>
      </div>
    </div>
  );
};
