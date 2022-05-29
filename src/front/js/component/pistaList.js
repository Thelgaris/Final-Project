import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PistaInfo } from "./pistaInfo";

export const PistaList = () => {
  return (
    // Hay que hacer un map de la tabla de pistas
    <div className="container row justify-content-center">
      <div className="list-group col-4">
        <PistaInfo />
      </div>
    </div>
  );
};
