import DailyElement from "./DailyElement";
import type { Welcome } from "../../../types";

interface Props {
  weatherData: Welcome | null;
}


export default function Daily({ weatherData }: Props) {
  return (
    <div className='max-w-90 mx-auto mt-10 md:max-w-187.5'>
      <h2 className='text-lg font-bold text-neutral-0 pl-3'>Daily forecast</h2>
      <div className='p-2 grid grid-cols-3 md:grid-cols-7 gap-4 '>
        {weatherData?.daily.time.map((date, index) => (
          <DailyElement
            key={date}
            date={date}
            weatherCode={weatherData.daily.weather_code[index]}
            tempMax={weatherData.daily.temperature_2m_max[index]}
            tempMin={weatherData.daily.temperature_2m_min[index]}
          />
        ))}
      </div>
    </div>
  );
}
