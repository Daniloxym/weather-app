import { useUnits } from '../../context/UnitsContext';

export default function Modal() {
  const {
    temperatureUnit,
    windSpeedUnit,
    precipitationUnit,
    setTemperatureUnit,
    setWindSpeedUnit,
    setPrecipitationUnit,
    switchToImperial,
    switchToMetric,
  } = useUnits();

  const isMetric = temperatureUnit === 'celsius' && windSpeedUnit === 'kmh' && precipitationUnit === 'mm';

  return (
    <div className='absolute w-54 top-15 right-0 bg-neutral-700 py-4 rounded-lg px-3 text-neutral-0'>
      <button
        className='py-2 text-left hover:bg-neutral-600 w-full rounded-lg px-2 cursor-pointer'
        onClick={isMetric ? switchToImperial : switchToMetric}>
        Switch to {isMetric ? 'Imperial' : 'Metric'}
      </button>
      <div className='flex flex-col border-t border-neutral-600 pt-2 mt-2'>
        <span className='text-neutral-300'>Temperature</span>
        <button
          className={`text-left px-2 hover:bg-neutral-600 w-full rounded-lg py-2 ${temperatureUnit === 'celsius' ? 'bg-neutral-600' : ''} cursor-pointer`}
          onClick={() => setTemperatureUnit('celsius')}>
          Celsius (°C)
        </button>
        <button
          className={`text-left px-2 hover:bg-neutral-600 w-full rounded-lg py-2 ${temperatureUnit === 'fahrenheit' ? 'bg-neutral-600' : ''} cursor-pointer`}
          onClick={() => setTemperatureUnit('fahrenheit')}>
          Fahrenheit (°F)
        </button>
      </div>
      <div className='flex flex-col border-t border-neutral-600 pt-2 mt-2'>
        <span className='text-neutral-300'>Wind Speed</span>
        <button
          className={`text-left px-2 hover:bg-neutral-600 w-full rounded-lg py-2 ${windSpeedUnit === 'kmh' ? 'bg-neutral-600' : ''} cursor-pointer`}
          onClick={() => setWindSpeedUnit('kmh')}>
          km/h
        </button>
        <button
          className={`text-left px-2 hover:bg-neutral-600 w-full rounded-lg py-2 ${windSpeedUnit === 'mph' ? 'bg-neutral-600' : ''} cursor-pointer`}
          onClick={() => setWindSpeedUnit('mph')}>
          mph
        </button>
      </div>
      <div className='flex flex-col border-t border-neutral-600 pt-2 mt-2'>
        <span className='text-neutral-300'>Precipitation</span>
        <button
          className={`text-left px-2 hover:bg-neutral-600 w-full rounded-lg py-2 ${precipitationUnit === 'mm' ? 'bg-neutral-600' : ''} cursor-pointer`}
          onClick={() => setPrecipitationUnit('mm')}>
          Milimeters (mm)
        </button>
        <button
          className={`text-left px-2 hover:bg-neutral-600 w-full rounded-lg py-2 ${precipitationUnit === 'inch' ? 'bg-neutral-600' : ''} cursor-pointer`}
          onClick={() => setPrecipitationUnit('inch')}>
          Inches (in)
        </button>
      </div>
    </div>
  );
}
