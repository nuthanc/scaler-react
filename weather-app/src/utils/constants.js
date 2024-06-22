export const API_KEY = 'aa05a758bdfdd59e41395706676de3a8';

export const DEFAULT_PARAMS = `appid=${API_KEY}&units=metric`;

export const BASE_URL = 'https://api.openweathermap.org/data/2.5';
export const CURRENT_WEATHER_URL = `${BASE_URL}/weather?${DEFAULT_PARAMS}`;
export const HOURLY_WEATHER_URL = `${BASE_URL}/forecast?${DEFAULT_PARAMS}`;

export const getIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@2x.png`;
