import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import "../../styles/maps.css";

export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const [lat, setLat] = useState(40.4303759999059);
  const [lng, setLng] = useState(-3.7049425337888837);
  return (
    <div className="row container-fluid h-auto w-auto">
      <div className="col">
        <GoogleMap
          zoom={10}
          center={{ lat, lng }}
          mapContainerClassName={{ width: "100%", height: "auto" }}
          mapContainerStyle={{
            height: "300px",
            width: "600px",
            marginBottom: "10px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Marker position={{ lat: 44, lng: -80 }} />
        </GoogleMap>
      </div>
    </div>
  );
}
