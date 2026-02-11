import Logo from './Logo';
import Units from './Units';
import Dropdown from './Dropdown';
import { useState } from 'react';
import Modal from './Modal';

export default function Header() {
  const [isUnitOpen, setIsUnitOpen] = useState(false);

  return (
    <header className='max-w-360 mx-auto p-4'>
      <nav className='flex justify-between'>
        <a href=''>
          <Logo />
        </a>

        <div
          className='flex gap-2 items-center bg-neutral-600 text-neutral-0 px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer relative'
          onClick={() => setIsUnitOpen(!isUnitOpen)}>
          <Units />
          <span>Units</span>
          <Dropdown />
          {isUnitOpen && <Modal />}
        </div>
      </nav>
    </header>
  );
}
