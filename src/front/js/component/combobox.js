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
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOptions,
} from "@reach/combobox";

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
        <ComboboxInput
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
