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
        <div className="col-3 ">
          <ProfileComp />
        </div>
        <div className="col-6 mt-5 ">
          <StravaData />
        </div>
      </div>
      <div className="col-6 mt-5 offset-3">
        <Followers />
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <HistoryCard />
        </div>
      </div>
    </div>
  );
};
