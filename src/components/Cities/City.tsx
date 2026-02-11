import type { City } from '../../types';

interface Props {
  city: City;
  setCity: (city: City | null) => void;
  setCities: (cities: City[]) => void;
  setSearchQuery: (query: string) => void;
}

export default function CityElement({ city, setCity, setCities, setSearchQuery }: Props) {
  return (
    <div
      key={city.id}
      className='text-neutral-0 py-1 border-b border-neutral-500 last:border-0 cursor-pointer hover:bg-neutral-500'
      onClick={() => {
        setCity(city);
        setCities([]);
        setSearchQuery('');
      }}>
      {city.name}, {city.country}
    </div>
  );
}
