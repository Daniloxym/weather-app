import Header from './components/Header/Header';
import HeroSection from './components/Hero/HeroSection';
import Results from './components/Results/Results';
import { useState } from 'react';
import type { City } from './types';

function App() {
  const [cities, setCities] = useState<City[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [city, setCity] = useState<City | null>(null);

  return (
    <>
      <Header />
      <main>
        <HeroSection
          setCities={setCities}
          cities={cities}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setHasSearched={setHasSearched}
          setCity={setCity}
        />
        {hasSearched && city === null && (
          <p className='text-3xl text-center text-neutral-0 mt-10'>No search result found!</p>
        )}
        {city !== null && <Results city={city} />}
      </main>
    </>
  );
}

export default App;
