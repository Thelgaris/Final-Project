import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { Followers } from "../component/followers";
import { Suggested } from "../component/suggested";

export const Profile = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <Followers />
      <Suggested />
    </div>
  );
};
