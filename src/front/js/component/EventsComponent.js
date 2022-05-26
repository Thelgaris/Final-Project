import React from "react";
import { Link } from "react-router-dom";
import { createEventBtn } from "./createEventBtn";

export const EventsComponent = () => {
  return (
    <div class="container">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Próximos Eventos</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
          <li class="list-group-item">A second item</li>
          <li class="list-group-item">A third item</li>
        </ul>
        <div class="card-body">
          <div href="#" class="card-link">
            {createEventBtn}
          </div>
        </div>
      </div>
    </div>
  );
};
