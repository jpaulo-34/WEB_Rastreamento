import { useEffect, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

  var latitude = null;
  var longitude = null ;

  
const response = fetch ('http://192.168.0.80:8000/api/localizations/1')
.then(function(responseData) {
  return responseData.json();
  
})
  .then(function(jsonData) {
  
    latitude = jsonData.lat;
    
  
  })
  console.log(latitude)




export default function Home() {
 
const { isLoaded } = useLoadScript({
  googleMapsApiKey: "AIzaSyD8N7s1o9AFYdx8d2-M5NnQw41BnesBx44",
});

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function  Map() {

   
 const center = useMemo(() => ({ lat: latitude, lng: 43 }), []);
  return (
    <GoogleMap zoom={15} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
