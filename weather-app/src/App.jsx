import { Flex, Heading, Spinner } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import CityWeather from './components/CityWeather';
import { useEffect, useState } from 'react';
import { CURRENT_WEATHER_URL, HOURLY_WEATHER_URL } from './utils/constants';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error) => {
      console.error(error.message);
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      }
    };
    getLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (location) {
        const params = city
          ? `&q=${city}`
          : `&lat=${location?.latitude}&lon=${location?.longitude}`;
        const currentWeatherUrl = `${CURRENT_WEATHER_URL}${params}`;
        const hourlyWeatherUrl = `${HOURLY_WEATHER_URL}${params}`;

        try {
          const currentWeatherResponse = await fetch(currentWeatherUrl);
          const hourlyWeatherResponse = await fetch(hourlyWeatherUrl);
          const currentWeatherData = await currentWeatherResponse.json();
          const hourlyWeatherData = await hourlyWeatherResponse.json();
          setWeatherData({
            current: currentWeatherData,
            hourly: hourlyWeatherData,
          });
          setLoading(false);
        } catch (error) {
          console.error('Error fetching weather data', error);
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [city, location]);

  return (
    <Flex direction={'column'} align={'center'} m={5}>
      <Heading mb={4}>Weather App</Heading>
      <SearchBar setCity={setCity} />

      {!loading ? (
        <CityWeather currentWeather={weatherData?.current} />
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </Flex>
  );
};

export default App;
