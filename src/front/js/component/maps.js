import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Geocode from "react-geocode";
import { useState } from "react";
import "../../styles/maps.css";
import mapStyles from "./mapStyles";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxImput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOptions,
} from "@reach/combobox";

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

  if (loadError) return "Error loading maps";
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

const Map = () => {
  const [lat, setLat] = useState(40.4303759999059);
  const [lng, setLng] = useState(-3.7049425337888837);
  const center = { lat, lng };
  const [selected, setSelected] = useState(null);

  return (
    <div className="container">
      <GoogleMap
        zoom={8}
        center={center}
        mapContainerStyle={mapContainerStyle}
        options={options}
      >
        <Marker></Marker>
      </GoogleMap>
      <Search />
    </div>
  );
};

const Search = () => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 40.4303759999059, lng: () => -3.7049425337888837 },
      radius: 200 * 1000,
    },
  });

  return (
    <div>
      <Combobox
        onSelect={(adress) => {
          console.log(adress);
        }}
      >
        <Comboboximput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          disable={!ready}
          placeholder="Enter adress"
        />
      </Combobox>
    </div>
  );
};
