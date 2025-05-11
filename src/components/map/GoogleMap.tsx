import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: "weekly",
    });

    loader.load().then(() => {
      const geocoder = new google.maps.Geocoder();
      
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results && results[0] && mapRef.current) {
          const map = new google.maps.Map(mapRef.current, {
            center: results[0].geometry.location,
            zoom: 16,
          });

          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
          });
        }
      });
    });
  }, [address, apiKey]);

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
};

export default GoogleMap;