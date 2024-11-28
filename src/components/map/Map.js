import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

function Map({ location }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCnCYY6SWxLS8TI_tHRgZ-PXd9DzupF_5Y", // Replace with a valid API key
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={14}
      center={location}
      mapContainerStyle={{ width: "100%", height: "300px", borderRadius: "15px" }}
    >
      <Marker position={location} />
    </GoogleMap>
  );
}

export default Map;
