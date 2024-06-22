import { Box, Center, Flex, Text } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import CityWeather from './components/CityWeather';
import ForecastToday from './components/ForecastToday';
import Conditions from './components/Conditions';
import WeekForecast from './components/WeekForecast';
import { useEffect, useState } from 'react';
import { CURRENT_WEATHER_URL, HOURLY_WEATHER_URL } from './utils/constants';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleSuccess = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error) => {
      setError(error.message);
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };
    getLocation();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
        } catch (error) {
          console.error('Error fetching weather data', error);
        }
      }
    };
    fetchData();
  }, [city, location]);

  return (
    <Box p={3} w={'100%'} h={'100vh'}>
      <SearchBar setCity={setCity} />
      {error && <Text color="red.500">{error}</Text>}
      <Flex gap="20px">
        <Flex direction={'column'} flex={'2'}>
          <CityWeather currentWeather={weatherData?.current} />
          <ForecastToday hourlyWeather={weatherData?.hourly} />
          <Conditions currentWeather={weatherData?.current} />
        </Flex>
        <Center bg="green.500" flex={'1'}>
          <WeekForecast />
        </Center>
      </Flex>
    </Box>
  );
};

export default App;
