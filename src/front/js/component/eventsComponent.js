import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CreateEventBtn } from "./createEventBtn";

export const EventsComponent = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getCurrentUser();
  }, []);

  return (
    <div className="container-fluid">
      <div className="justify-content-center">
        <div className="card row d-flex">
          <div className="card-body">
            <h5 className="card-title">Próximos Eventos</h5>
          </div>
          <div>
            {store.userEvents.map((event) => {
              return (
                <div key={event.id} className=" ">
                  <div className="d-flex flex-row ">
                    <p className=" p-2 mb-0 text-start border-0 col-8">
                      {event.name}
                    </p>

                    <p className=" p-2 mb-0 border-0 col-1 offset-2">
                      {event.participants}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="card-footer justify-content-center">
            <div href="#" className="card-link ">
              <CreateEventBtn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
