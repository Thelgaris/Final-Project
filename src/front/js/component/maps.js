import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "../../styles/maps.css";
import mapStyles from "./mapStyles";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";

const libraries = ["places"];
const mapContainerStyle = {
  height: "400px",
  width: "500px",
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });
  const [selected, setSelected] = useState(null);

  if (loadError) return "Error loading maps";
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const [lat, setLat] = useState(37.177338);
  const [lng, setLng] = useState(-3.598557);
  const center = { lat, lng };

  return (
    <div className="container">
      <SearchPlaces setLat={setLat} setLng={setLng} />
      <GoogleMap
        zoom={8}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
      >
        <Marker
          position={{ lat, lng }}
          icon={{
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 4,
            strokeColor: "#FF6347",
            fillColor: "#FF6347",
            fillOpacity: 1,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export const SearchPlaces = ({ setLat, setLng, setCity }) => {
  const { store, actions } = useContext(Context);
  const [adress, setAdress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    if (store.currentUser.detail) {
      handleSelect(store.currentUser.detail.city);
    }
  }, [store.currentUser]);

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const ll = await getLatLng(results[0]);
    console.log(ll);
    setAdress(value);
    if (setCity) {
      setCity(value);
    }
    setCoordinates(ll);
    setLat(ll.lat);
    setLng(ll.lng);
  };

  return (
    <div className="app">
      <PlacesAutocomplete
        value={adress}
        onChange={setAdress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};
