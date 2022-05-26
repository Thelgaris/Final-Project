import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { EventsComponent } from "../component/eventsComponent";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <EventsComponent />
    </div>
  );
};
