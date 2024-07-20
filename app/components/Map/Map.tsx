"use client";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_mapbox;

const Map = (props) => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [lng, setLng] = useState(-96);
  const [lat, setLat] = useState(37.8);
  const [zoom, setZoom] = useState(9);
  const pickUpCoordinates = props.pickUpCoordinates;
  const dropOffCoordinates = props.dropOffCoordinates;
  const addToMap = (pickUpCoordinates, dropOffCoordinates) => {
    const marker1 = new mapboxgl.Marker()
      .setLngLat(pickUpCoordinates)
      .addTo(map);
    const marker2 = new mapboxgl.Marker()
      .setLngLat(dropOffCoordinates)
      .addTo(map);
    map.fitBounds([pickUpCoordinates, dropOffCoordinates], { padding: 100 });
  };
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
    if (pickUpCoordinates && dropOffCoordinates) {
      addToMap(pickUpCoordinates, dropOffCoordinates);
    }
  });
  return (
    <div
      ref={mapContainer}
      id="map"
      className="map-container h-screen w-full flex flex-1"></div>
  );
};

export default Map;
