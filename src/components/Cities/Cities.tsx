import type { City } from '../../types';
import CityElement from './City';

interface Props {
  cities: City[];
  setCity: (city: City | null) => void;
  setCities: (cities: City[]) => void;
  setSearchQuery: (query: string) => void;
}

export default function Cities({ cities, setCity, setCities, setSearchQuery }: Props) {
  return (
    <div className='absolute top-15 left-0 bg-neutral-600 w-full py-3 px-4 rounded-lg z-10'>
      {cities.map((city) => (
        <CityElement key={city.id} city={city} setCity={setCity} setCities={setCities} setSearchQuery={setSearchQuery} />
      ))}
    </div>
  );
}
