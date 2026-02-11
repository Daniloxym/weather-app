export const fetchCityName = async (query: string) => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5&language=es&format=json`
    );
    const { results } = await response.json();
    return results || [];
  } catch (error) {
    console.error('Error fetching city name:', error);
    return [];
  }
};

interface WeatherUnits {
  temperatureUnit: 'celsius' | 'fahrenheit';
  windSpeedUnit: 'kmh' | 'mph';
  precipitationUnit: 'mm' | 'inch';
}

export const fetchCityWeather = async (
  latitude: number,
  longitude: number,
  units: WeatherUnits
) => {
  try {
    const tempUnit = units.temperatureUnit === 'celsius' ? 'celsius' : 'fahrenheit';
    const windUnit = units.windSpeedUnit === 'kmh' ? 'kmh' : 'mph';
    const precipUnit = units.precipitationUnit === 'mm' ? 'mm' : 'inch';

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&timezone=auto&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&precipitation_unit=${precipUnit}`
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching city weather:', error);
    return null;
  }
};
