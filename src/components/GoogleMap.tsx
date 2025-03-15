"use client";

import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "200px",
};

interface GoogleMapProps {
  label: string;
  address: string;
}

interface LatLng {
  lat: number;
  lng: number;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ label, address }) => {
  const [location, setLocation] = useState<LatLng | null>(null);

  useEffect(() => {
    const geocodeAddress = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      if (data.results[0]) {
        const { lat, lng } = data.results[0].geometry.location;
        setLocation({ lat, lng });
      }
    };
    geocodeAddress();
  }, [address]);

  if (!location) return <div>Đang tải...</div>;

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} label={label} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
