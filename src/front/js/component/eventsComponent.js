import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CreateEventBtn } from "./createEventBtn";

export const EventsComponent = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    actions.getUserEvents();
  }, []);

  return (
    <div className="container">
      <div className="justify-content-center">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Próximos Eventos</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Evento 1</li>
            <li className="list-group-item">Evento 2</li>
            <li className="list-group-item">Evento 3</li>
          </ul>
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
