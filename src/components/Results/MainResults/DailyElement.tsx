interface Props {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
}

const getWeatherIcon = (code: number): string => {
  // WMO Weather codes: https://open-meteo.com/en/docs
  if (code === 0) return '/images/icon-sunny.webp';
  if (code <= 2) return '/images/icon-partly-cloudy.webp';
  if (code === 3) return '/images/icon-overcast.webp';
  if (code <= 48) return '/images/icon-fog.webp';
  if (code <= 55) return '/images/icon-drizzle.webp';
  if (code <= 67) return '/images/icon-rain.webp';
  if (code <= 77) return '/images/icon-snow.webp';
  if (code <= 99) return '/images/icon-storm.webp';
  return '/images/icon-partly-cloudy.webp';
};

const getDayName = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'short' });
};

export default function DailyElement({ date, weatherCode, tempMax, tempMin }: Props) {
  return (
    <div className='py-4 px-2 bg-neutral-600 rounded-lg flex flex-col gap-2 text-neutral-0'>
      <span className="text-center">{getDayName(date)}</span>
      <img src={getWeatherIcon(weatherCode)} alt='' />
      <div className='flex justify-between items-center'>
        <span className='text-lg'>{Math.round(tempMax)}°</span>
        <span className=' text-lg text-neutral-400'>{Math.round(tempMin)}°</span>
      </div>
    </div>
  );
}
