import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";

export const Map = ({ location, zoomLevel }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: "AIzaSyBuoDZVN8C0vCYgYE1C9PSVHXgT2t5eTNc",
      }}
      defaultCenter={location}
      defaultZoom={zoomLevel}
    >
      <FaMapMarkerAlt
        size="4em"
        lat={location.lat}
        lng={location.lng}
        text={location.address}
      />
    </GoogleMapReact>
  );
};
