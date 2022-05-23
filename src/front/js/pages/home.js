import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.css";
import { PistaList } from "../component/pistaList";
import { PistaInfo } from "../component/pistaInfo";
import { EventInfo } from "../component/eventInfo";
import { EventList } from "../component/eventList";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="text-center mt-5">
      <PistaList />
      <PistaInfo />
      <EventInfo />
      <EventList />
    </div>
  );
};
