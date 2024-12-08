'use client';

import { useState } from 'react';
import { Modal } from '../Modal';

export function Participate() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal opened={isModalOpen} />
      <button
        onClick={() => setIsModalOpen(true)}
        className='bg-orange font-bold text-white py-3 px-4 inline-block rounded-lg w-full text-center text-lg shadow-md transition-transform hover:scale-105 duration-300'
      >
        ¡Participa gratis!
      </button>
    </>
  );
}
