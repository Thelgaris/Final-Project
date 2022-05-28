import React from "react";
import { Link } from "react-router-dom";

export const Followers = () => {
  return (
    <div className="row">
      <ul
        className="nav nav-pills  d-flex justify-content-center "
        role="tablist"
      >
        <li className="nav-item col-2" role="presentation">
          <button
            className="nav-link btn  btn-bg-light w-100 text-black"
            id="followers"
            data-bs-toggle="pill"
            data-bs-target="#followersList"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
            onClick={() => {}}
          >
            Seguidores
          </button>
        </li>
        <li className="nav-item col-2 " role="presentation">
          <button
            type="button "
            className="nav-link btn btn-bg-light w-100 text-black"
            id="following"
            data-bs-toggle="pill"
            data-bs-target="#followingList"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
            onClick={() => {}}
          >
            Siguiendo
          </button>
        </li>
      </ul>
      <div className="tab-content row " id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="followersList"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div className="d-flex card-group">
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/300/200"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/300/200"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img
                src="https://picsum.photos/300/200"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade "
          id="followingList"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div className="d-flex card-group mt-5">
            <div class="card ">
              <img
                src="https://picsum.photos/300/200"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card ">
              <img
                src="https://picsum.photos/300/200"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div class="card ">
              <img
                src="https://picsum.photos/300/200"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
