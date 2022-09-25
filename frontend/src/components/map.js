import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";

  function Map() {

    return (
        <GoogleMap
          defaultZoom={10}
          defaultCenter={{ lat: 45.4211, lng: -75.6903 }}
        />
      );
    }
    
export const MapWrapped = withScriptjs(withGoogleMap(Map));
    