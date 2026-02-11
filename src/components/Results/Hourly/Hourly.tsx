import HourlyElement from './HourlyElement';
import type { Welcome } from '../../../types';
import { useState } from 'react';

interface Props {
  weatherData: Welcome | null;
}

const getDayName = (dateStr: string): string => {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { weekday: 'long' });
};

export default function Hourly({ weatherData }: Props) {
  const [selectedDay, setSelectedDay] = useState(0);

  // Filtrar horas por día seleccionado
  const getHourlyForDay = () => {
    if (!weatherData?.hourly || !weatherData?.daily) return [];

    const selectedDate = weatherData.daily.time[selectedDay];
    const hourlyData: { time: string; temperature: number; weatherCode: number }[] = [];

    weatherData.hourly.time.forEach((time, index) => {
      if (time.startsWith(selectedDate)) {
        hourlyData.push({
          time,
          temperature: weatherData.hourly.temperature_2m[index],
          weatherCode: weatherData.hourly.weather_code[index]
        });
      }
    });

    return hourlyData;
  };

  const hourlyData = getHourlyForDay();

  return (
    <div className='bg-neutral-800 px-5   rounded-lg text-neutral-0 flex flex-col gap-4 mt-5 md:mt-0'>
      <div className='flex justify-between items-center mt-5 md:gap-15'>
        <h2>Hourly forecast</h2>
        <select
          name='hourly-forecast'
          id='hourly-forecast'
          className='p-2 rounded-lg bg-neutral-600 text-neutral-0'
          value={selectedDay}
          onChange={(e) => setSelectedDay(Number(e.target.value))}>
          {weatherData?.daily.time.map((date, index) => (
            <option key={date} value={index}>
              {getDayName(date)}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col gap-2 pb-4 max-h-150 overflow-y-auto custom-scrollbar'>
        {hourlyData.map((hour) => (
          <HourlyElement
            key={hour.time}
            time={hour.time}
            temperature={hour.temperature}
            weatherCode={hour.weatherCode}
          />
        ))}
      </div>
    </div>
  );
}
