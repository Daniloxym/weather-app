import SearchIcon from './SearchIcon';
import Loading from './Loading';
import { useState } from 'react';
import type { City } from '../../types';
import { fetchCityName } from '../../services/cities';
import Cities from '../Cities/Cities';

interface Props {
  setCities: (cities: City[]) => void;
  cities: City[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setHasSearched: (value: boolean) => void;
  setCity: (city: City | null) => void;
}

export default function HeroSection({
  setCities,
  cities,
  searchQuery,
  setSearchQuery,
  setHasSearched,
  setCity
}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFetchCityName = async (query: string) => {
    setIsLoading(true);
    const results = await fetchCityName(query);
    setCities(results);
    setHasSearched(true);
    if (results.length === 0) {
      setCity(null);
    }
    setIsLoading(false);
  };

  return (
    <section className='max-w-360 mx-auto py-15 px-6'>
      <h1 className='text-6xl font-bold text-neutral-0 text-center'>
        How's the sky looking today?
      </h1>

      <div className='flex flex-col gap-4 md:flex-row md:justify-center mt-10 items-center max-w-187.5 mx-auto'>
        <div className='flex gap-2 items-center bg-neutral-600 px-6 py-3 rounded-lg w-full focus-within:ring-2 focus-within:outline-1 outline-neutral-0 transition-colors duration-300 relative'>
          <SearchIcon />
          <input
            className='placeholder-neutral-0 text-lg outline-none text-neutral-0 w-full'
            type='text'
            placeholder='Search for a place...'
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCities([]);
              setHasSearched(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleFetchCityName(searchQuery);
              }
            }}
          />
          {isLoading && <Loading />}
          {!isLoading && cities.length > 0 && (
            <Cities
              cities={cities}
              setCity={setCity}
              setCities={setCities}
              setSearchQuery={setSearchQuery}
            />
          )}
        </div>

        <button
          className='bg-blue-500 text-neutral-0 w-full py-3 rounded-lg text-xl md:max-w-30 hover:bg-blue-700 transition-colors duration-300 cursor-pointer'
          onClick={() => handleFetchCityName(searchQuery)}>
          Search
        </button>
      </div>
    </section>
  );
}
