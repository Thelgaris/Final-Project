import React from "react";
import { Link } from "react-router-dom";
import { CreateEventBtn } from "./createEventBtn";

export const EventsComponent = () => {
  return (
    <div className="container">
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
  );
};
