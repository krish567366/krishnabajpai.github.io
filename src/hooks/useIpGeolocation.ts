import { useState, useEffect } from 'react';

interface GeolocationData {
  ip: string;
  city: string;
  region: string;
  country: string;
  timezone: string;
  latitude: number;
  longitude: number;
}

export const useIpGeolocation = () => {
  const [geolocationData, setGeolocationData] = useState<GeolocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGeolocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
          throw new Error('Failed to fetch geolocation data');
        }
        const data = await response.json();
        setGeolocationData({
          ip: data.ip,
          city: data.city,
          region: data.region,
          country: data.country_name,
          timezone: data.timezone,
          latitude: data.latitude,
          longitude: data.longitude,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchGeolocation();
  }, []);

  return { geolocationData, loading, error };
};