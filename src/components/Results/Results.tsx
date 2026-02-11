import MainResults from './MainResults/MainResults';
import Hourly from './Hourly/Hourly';
import ResultLoading from './MainResults/ResultLoading';
import type { City, Welcome } from '../../types';
import { fetchCityWeather } from '../../services/cities';
import { useEffect, useState } from 'react';
import { useUnits } from '../../context/UnitsContext';

interface Props {
  city: City | null;
}

export default function Results({ city }: Props) {
  const [weatherData, setWeatherData] = useState<Welcome | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { temperatureUnit, windSpeedUnit, precipitationUnit } = useUnits();

  useEffect(() => {
    const handleWeatherFetch = async () => {
      if (city) {
        setIsLoading(true);
        try {
          const data = await fetchCityWeather(city.latitude, city.longitude, {
            temperatureUnit,
            windSpeedUnit,
            precipitationUnit,
          });
          setWeatherData(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    handleWeatherFetch();
  }, [city, temperatureUnit, windSpeedUnit, precipitationUnit]);

  if (isLoading) {
    return (
     <ResultLoading />
    );
  }

  return (
    <section className='flex flex-col gap-6 md:flex-row md:justify-center py-10 px-5'>
      <MainResults city={city} weatherData={weatherData} />
      <Hourly weatherData={weatherData} />
    </section>
  );
}
