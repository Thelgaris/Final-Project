import React from "react";

import { Link } from "react-router-dom";

export const HistoryCard = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card mb-3">
        <img
          src="https://picsum.photos/seed/picsum/600/300"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text text-end">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};
