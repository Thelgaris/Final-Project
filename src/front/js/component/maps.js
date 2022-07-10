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
    name: "Colegio Esclavas SCJ Cádiz",
    position: { lat: 36.51931424934137, lng: -6.2842543819317624 },
  },
  {
    id: 5,
    name: "Playa de Santa María del Mar",
    position: { lat: 36.51808561914489, lng: -6.28502678310053 },
  },
  {
    id: 6,
    name: "Playa de Santa María del Mar",
    position: { lat: 36.499480773900835, lng: -6.273678958126187 },
  },
  {
    id: 7,
    name: "Complejo Deportivo Ciudad de Cádiz",
    position: { lat: 36.498146073305236, lng: -6.270549028518058 },
  },
  {
    id: 8,
    name: "Campo Hondo",
    position: { lat: 36.52547817728699, lng: -6.288277607071894 },
  },
  {
    id: 9,
    name: "Playa de la Cortadura",
    position: { lat: 36.489876759076694, lng: -6.26844052005614 },
  },
  {
    id: 10,
    name: "Complejo Deportivo Nuñez Blanca Zaidín",
    position: { lat: 37.15959750553048, lng: -3.5942230944367113 },
  },
  {
    id: 11,
    name: "	Pistas Polideportivas La Argentinita",
    position: { lat: 37.20068181271543, lng: -3.6145395065821893 },
  },
  {
    id: 12,
    name: "Complejo Deportivo Chana",
    position: { lat: 37.196554187256446, lng: -3.628433313457702 },
  },
  {
    id: 13,
    name: "Centro de Actividades Deportivas UGR (Paseillos)",
    position: { lat: 37.183330915636084, lng: -3.608608402739702 },
  },
  {
    id: 14,
    name: "Pista deportiv Bola de Oro",
    position: { lat: 37.16539492606441, lng: -3.5833971026469036 },
  },
  {
    id: 15,
    name: "Pistas deportivas Cruz de Lagos",
    position: { lat: 37.159869181656994, lng: -3.602617886750501 },
  },
  {
    id: 16,
    name: "Roller Club",
    position: { lat: 37.159512465768856, lng: -3.582737040065961 },
  },
  {
    id: 17,
    name: "Estadio de la Juventud",
    position: { lat: 37.1855646922307, lng: -3.6170081800619895 },
  },
  {
    id: 18,
    name: "Pistas de Baloncesto 1",
    position: { lat: 37.196808333432, lng: -3.6115372192286257 },
  },
  {
    id: 19,
    name: "Pistas de Baloncesto 2",
    position: { lat: 37.200691615328516, lng: -3.6191748720317434 },
  },
  {
    id: 20,
    name: "Pistas de Baloncesto 3",
    position: { lat: 37.18994348372912, lng: -3.5982516924027173 },
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
  const [lat, setLat] = useState(37.177338);
  const [lng, setLng] = useState(-3.598557);
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
      <SearchPlaces setLat={setLat} setLng={setLng} />
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
            position={position}
            onClick={() => handleActiveMarker(id)}
            icon={{
              path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              scale: 4,
              strokeColor: "#FF6347",
              fillColor: "#FF6347",
              fillOpacity: 1,
              strokeWeight: 2,
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
