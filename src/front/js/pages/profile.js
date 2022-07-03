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
    <div className="container text-center mt-5 ">
      <div className="row">
        <div className="w-auto justify-content-center text-center ">
          <ProfileComp />
        </div>
        <div className="w-auto d-grid  h-auto d-flex justify-content-between mt-5 ms-3">
          <StravaData />
        </div>
      </div>
      <div className="d-inline w-auto justify-content-center text-center">
        <Followers />
      </div>
      <div className="row">
        <div className="d-inline w-auto justify-content-center text-center">
          <HistoryCard />
        </div>
      </div>
    </div>
  );
};
