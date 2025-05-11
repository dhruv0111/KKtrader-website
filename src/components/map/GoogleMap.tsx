import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface GoogleMapProps {
  address: string;
  apiKey: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ address, apiKey }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey) {
      setError('Google Maps API key is missing');
      return;
    }

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
            mapTypeControl: true,
            streetViewControl: true,
            fullscreenControl: true,
          });

          new google.maps.Marker({
            map,
            position: results[0].geometry.location,
            title: 'KK Traders Location',
          });
        } else {
          setError('Could not find the location. Please check the address.');
        }
      });
    }).catch((err) => {
      console.error('Error loading Google Maps:', err);
      setError('Failed to load Google Maps. Please check your API key and try again.');
    });
  }, [address, apiKey]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <p className="text-gray-600 font-medium text-center px-4">{error}</p>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-full rounded-lg" />;
};

export default GoogleMap;