import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Register = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="card">
        <div className="card-body">This is some text within a card body.</div>
      </div>
    </div>
  );
};

Register.propTypes = {
  match: PropTypes.object,
};
