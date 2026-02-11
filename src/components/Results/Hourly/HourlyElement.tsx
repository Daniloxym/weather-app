import { getWeatherIcon } from '../../../utils/getWeatherIcon';

interface Props {
  time: string;
  temperature: number;
  weatherCode: number;
}

const formatHour = (isoTime: string): string => {
  const date = new Date(isoTime);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });
};

export default function HourlyElement({ time, temperature, weatherCode }: Props) {
  return (
    <div className='flex justify-between bg-neutral-700 rounded-lg  px-2 items-center py-1 '>
      <div className='flex justify-between items-center gap-2'>
        <img className='w-12' src={getWeatherIcon(weatherCode)} alt='Weather icon' />
        <h3>{formatHour(time)}</h3>
      </div>
      <span>{Math.round(temperature)}°</span>
    </div>
  );
}
