import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import Calendar from "react-calendar";

export const Calendar = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getSports();
    actions.getEvents();
  }, []);

  return (
    <div>
      <div className="app">
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container">
          <Calendar onChange={setDate} value={date} />
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
      </div>
    </div>
  );
};
