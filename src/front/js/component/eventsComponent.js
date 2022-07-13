import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CreateEventBtn } from "./createEventBtn";
import "../../styles/profile.css";
import { Participants } from "./participants";

export const EventsComponent = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getCurrentUser();
  }, []);

  return (
    <div
      className="container-fluid d-inline-block h-auto mt-5"
      style={{ width: "300px" }}
    >
      <div className="justify-content-center border-0 ">
        <div className="card row  border-0">
          <div className="card-body col border-bottom w-100 eventsTitle rounded-3">
            <h2 className="card-title " style={{ height: "60px" }}>
              <i className="fas fa-h1 ">Proximos eventos</i>
            </h2>
          </div>
          <div>
            {store.userEvents.map((uevent) => {
              return (
                <div key={uevent.id} className=" ">
                  <div className="d-flex ">
                    <p className=" mb-1 mt-1 text-start d-inline col-8">
                      {uevent.name}
                    </p>
                    <i
                      className="fas fa-users mb-1 mt-1 border-0 d-inline col-3"
                      style={{ color: "#014f5a" }}
                    >
                      {uevent.participants}
                    </i>
                    <i
                      className="far fa-calendar-times mb-1 mt-1 border-0d-inline col-1"
                      onClick={(e) => {
                        actions.setUnJoinEvents(uevent.id);
                      }}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-footer justify-content-center d-inline-block gradient">
            <div href="#" className="card-link d-inline-block gradient">
              <CreateEventBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
