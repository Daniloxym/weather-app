import Daily from './Daily';
import type { City, Welcome } from '../../../types';
import { calculateDate } from '../../../utils/calculateDate';
import { getWeatherIcon } from '../../../utils/getWeatherIcon';

interface Props {
  city: City | null;
  weatherData: Welcome | null;
}

export default function MainResults({ city, weatherData }: Props) {
  return (
    <div>
      <div
        className=" h-71.5 bg-[url('/images/bg-today-small.svg')] bg-cover bg-center rounded-lg mx-auto px-2 flex flex-col  items-center
        justify-center gap-10 md:bg-[url('/images/bg-today-large.svg')] md:max-w-187.5 md:flex-row md:justify-around">
        <div className=' text-neutral-0 text-center flex flex-col gap-2'>
          <h2 className='text-3xl  font-bold'>
            {city?.name}, {city?.country}
          </h2>
          <span className='text-xl'>{calculateDate(weatherData?.current.time || '')}</span>
        </div>

        <div className='flex items-center'>
          <img className='w-26' src={getWeatherIcon(weatherData?.current.weather_code || 0)} alt='Weather icon' />
          <span className='text-7xl text-neutral-0'>
            {weatherData?.current.temperature_2m}°
          </span>
        </div>
      </div>
      <div className='p-2 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-90 mx-auto mt-10 md:max-w-187.5'>
        <div className='p-4 bg-neutral-600 rounded-lg flex flex-col gap-2 text-neutral-0'>
          <span>Feels Like</span>
          <span className='text-3xl'>{weatherData?.current.apparent_temperature}°</span>
        </div>

        <div className='p-4 bg-neutral-600 rounded-lg flex flex-col gap-2 text-neutral-0'>
          <span>Humidity</span>
          <span className='text-3xl'>{weatherData?.current.relative_humidity_2m} %</span>
        </div>

        <div className='p-4 bg-neutral-600 rounded-lg flex flex-col gap-2 text-neutral-0'>
          <span>Wind</span>
          <span className='text-3xl'>{weatherData?.current.wind_speed_10m} km/h</span>
        </div>

        <div className='p-4 bg-neutral-600 rounded-lg flex flex-col gap-2 text-neutral-0'>
          <span>Precipitation</span>
          <span className='text-3xl'>{weatherData?.current.precipitation} mm</span>
        </div>
      </div>
      <Daily weatherData={weatherData} />
    </div>
  );
}
