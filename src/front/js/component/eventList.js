import React from "react";
import { Link } from "react-router-dom";
import { InfoEvent } from "./infoEvent";

export const EventList = () => {
  return (
    <div className="container row ">
      <ul className="list-group list-group-flush row text-center">
        <div className="col d-flex ">
          <li className="list-group-item w-50 ">Evento 1</li>
          <button
            className="btn btn-link list-group-item w-50 "
            onClick={() => {
              <InfoEvent />;
            }}
          >
            Evento 2
          </button>
        </div>
        <div className="col d-flex ">
          <li className="list-group-item w-50 ">Evento 3</li>
          <li className="list-group-item w-50 ">Evento 4</li>
        </div>
        <div className="col d-flex ">
          <li className="list-group-item w-50 ">Evento 5</li>
          <li className="list-group-item w-50 ">Evento 6</li>
        </div>
        <div className="col d-flex ">
          <li className="list-group-item w-50 ">Evento 7</li>
          <li className="list-group-item w-50 ">Evento 8</li>
        </div>
      </ul>
    </div>
  );
};
