import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Followers } from "../component/followers";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Followers />
    </div>
  );
};
