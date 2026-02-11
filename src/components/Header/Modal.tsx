export default function Modal() {
  return (
    <div className='absolute w-54 top-15 right-0 bg-neutral-700 py-4 rounded-lg px-3  text-neutral-0'>
      <button className='py-2 text-left hover:bg-neutral-600 w-full rounded-lg'>Switch to Imperial</button>
      <div className='flex flex-col border-t border-neutral-600 pt-2 mt-2'>
        <span className='text-neutral-300'>Temperature</span>
        <button className="text-left px-2  hover:bg-neutral-600 w-full rounded-lg py-2">Celsius (°C)</button>
        <button className="text-left px-2  hover:bg-neutral-600 w-full rounded-lg py-2">Fahrenheit (°F)</button>
      </div>
      <div className='flex flex-col border-t border-neutral-600 pt-2 mt-2'>
        <span className='text-neutral-300'>Wind Speed</span>
        <button className="text-left px-2  hover:bg-neutral-600 w-full rounded-lg py-2">km/h</button>
        <button className="text-left px-2  hover:bg-neutral-600 w-full rounded-lg py-2">mph</button>
      </div>
      <div className='flex flex-col border-t border-neutral-600 pt-2 mt-2'>
        <span className='text-neutral-300'>Precipitation</span>
        <button className="text-left px-2  hover:bg-neutral-600 w-full rounded-lg py-2">Milimeters (mm)</button>
        <button className="text-left px-2  hover:bg-neutral-600 w-full rounded-lg py-2">Inches (in)</button>
      </div>
    </div>
  );
}
