import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Geocode, { setRegion } from "react-geocode";
import { GoogleComponent } from "react-google-location";
import { useState } from "react";
import "../../styles/maps.css";
const API_KEY = "AIzaSyBBSzMeJ7oqkMy_Dk7nBdIPCQzgiudN1uU";

export const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};
/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null,
    };
  } */

/* const geolocalizacion = async () => {
  Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");
  const response = await Geocode.fromAdress(store.place.pista);
  setLat(response.results[0].geometry.location.lat);
  setLng(response.results[0].geometry.location.lng);
}; */
/* render() { */
function Map() {
  const [lat, setLat] = useState(36.52978);
  const [lng, setLng] = useState(-6.29465);

  return (
    <div className="container border-red">
      <GoogleMap
        zoom={10}
        center={{ lat, lng }}
        mapContainerClassName={{ width: "100%", height: "500px" }}
        mapContainerStyle={{
          height: "400px",
          width: "600px",
          marginBottom: "10px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
      <GoogleComponent
        apiKey={API_KEY}
        language={"en"}
        country={"country:in|country:us"}
        coordinates={true}
        locationBoxStyle={"custaom-style"}
        locationListStyle={"custom-style-list"}
        onChange={(e) => {
          this.setState({ place: e });
        }}
      />
    </div>
  );
}
/* } */
/* } */

/* export default App; */
/*  <input
          className="form-control w-25 mx-auto mb-2"
          type="search"
          placeholder="Ciudad"
          aria-label="Search"
          onChange={() => {}}
        /> */
