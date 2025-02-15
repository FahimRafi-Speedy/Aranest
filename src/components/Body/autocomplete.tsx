import React, { FC, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

const MapWithAutocomplete: FC = () => {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(
    null
  );

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      setPlace(place);
    }
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        zoom={10}
        center={{ lat: 37.7749, lng: -122.4194 }}
      >
        <Autocomplete onLoad={setAutocomplete} onPlaceChanged={onPlaceChanged}>
          <input
            type="text"
            className="input"
            placeholder="Enter a location"
            aria-label="Location input"
          />
        </Autocomplete>
        {place && place.geometry && place.geometry.location && (
          <Marker
            position={{
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithAutocomplete;
