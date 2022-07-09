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

const markers = [
  {
    id: 1,
    name: "Pabellón Centro Histórico Cádiz",
    position: { lat: 36.5354136382845, lng: -6.303692724427368 },
  },
  {
    id: 2,
    name: "El Náutico",
    position: { lat: 36.53697371987197, lng: -6.291498488605275 },
  },
  {
    id: 3,
    name: "Playa de La Caleta",
    position: { lat: 36.529961107451825, lng: -6.305780270565639 },
  },
  {
    id: 4,
    name: "Polideportivo La Mirandilla, Campo del Sur",
    position: { lat: 36.52763867174823, lng: -6.292638137754715 },
  },
];

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
  const [lat, setLat] = useState(40.4303759999059);
  const [lng, setLng] = useState(-3.7049425337888837);
  const center = { lat, lng };
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <div className="container">
      <div className="searchBox">
        <SearchPlaces setLat={setLat} setLng={setLng} />
      </div>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
        onLoad={handleOnLoad}
        onClick={() => setActiveMarker(null)}
      >
        {markers.map(({ id, name, position }) => (
          <Marker
            key={id}
            center={position}
            position={position}
            onClick={() => {
              handleActiveMarker(id);
            }}
          >
            {activeMarker === id ? (
              <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                <div>{name}</div>
              </InfoWindow>
            ) : null}
          </Marker>
        ))}
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
