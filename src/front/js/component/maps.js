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
    name: "Campo Hondo",
    position: { lat: 36.5252245, lng: -6.2889815 },
  },
  {
    id: 2,
    name: "Pabellón Centro Histórico Cádiz",
    position: { lat: 36.5336516, lng: -6.3059255 },
  },
  {
    id: 3,
    name: "El Nautico",
    position: { lat: 36.5366981, lng: -6.2919274 },
  },

  {
    id: 4,
    name: "Parque Cemento",
    position: { lat: 36.51931424934137, lng: -6.2842543819317624 },
  },
  {
    id: 5,
    name: "Complejo Deportivo Nuñez Blanca Zaidín",
    position: { lat: 37.1574745, lng: -3.5932758 },
  },
  {
    id: 6,
    name: "Complejo Deportivo Bola de Oro",
    position: { lat: 37.1643673, lng: -3.5835333 },
  },
  {
    id: 7,
    name: "Pistas Polideportivas Cruz de Lagos",
    position: { lat: 37.15, lng: -3.6 },
  },
  {
    id: 8,
    name: "	Centro Deportivo Aydanamar",
    position: { lat: 37.18817, lng: -3.60667 },
  },
  {
    id: 9,
    name: "Complejo Deporivo la Chana",
    position: { lat: 37.1912569, lng: -3.6293006 },
  },
  {
    id: 10,
    name: "Pista de baloncesto libre",
    position: { lat: 41.40474968396527, lng: 2.1796130213623806 },
  },
  {
    id: 11,
    name: "	Pistas Polideportivas La Argentinita",
    position: { lat: 37.20068181271543, lng: -3.6145395065821893 },
  },
  {
    id: 12,
    name: "Pistas Polideportivas Municipales Parque de la Maquinista",
    position: { lat: 41.383013792631736, lng: 2.1921790824873746 },
  },
  {
    id: 13,
    name: "Centro de Actividades Deportivas UGR (Paseillos)",
    position: { lat: 37.183330915636084, lng: -3.608608402739702 },
  },
  {
    id: 14,
    name: "Pista de Valldonzella SkatePark",
    position: { lat: 41.38455540830767, lng: 2.1658147795497715 },
  },
  {
    id: 15,
    name: "Complejo Deportivo Municipal La Mar Bella",
    position: { lat: 41.400598481123566, lng: 2.211544479509211 },
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
  {
    id: 21,
    name: "Pistas de Baloncesto 3",
    position: { lat: 37.18994348372912, lng: -3.5982516924027173 },
  },
  {
    id: 22,
    name: "Pistes Polideportives Municipals Antoni Gelabert",
    position: { lat: 41.44689585279384, lng: 2.1710037214666884 },
  },
  {
    id: 23,
    name: "Pistas de Baloncesto 3",
    position: { lat: 37.18994348372912, lng: -3.5982516924027173 },
  },
];

const libraries = ["places"];
const mapContainerStyle = {
  height: "250px",
  width: "450px",
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
    <div className="container map1">
      <div className="mt-5">
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
      <div className="d-flex mx-auto mt-4 justify-content-center">
        <SearchPlaces setLat={setLat} setLng={setLng} />
      </div>
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
