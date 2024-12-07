import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import ParticipantsCounter from '../ParticipantsCounter';

export default function MainRaffle() {
  return (
    <div className='bg-white rounded-sm shadow-md grid grid-cols-1 md:grid-cols-2'>
      <Image
        src='/test.png'
        alt='Tarjeta de regalo'
        width={400}
        height={400}
        className='object-cover h-40 md:h-full w-full'
      />
      <div className='p-8 space-y-8'>
        <div className='space-y-4'>
          <h3 className='text-2xl font-bold text-center'>
            <Balancer>Gana $10 USDT</Balancer>
          </h3>
          <p className='text-sm leading-relaxed text-center'>
            Métodos alternativos de pago disponibles
          </p>
        </div>

        <div className='space-y-6'>
          <ParticipantsCounter />

          <Link
            href='/'
            className='bg-orange font-bold text-white py-3 px-4 inline-block rounded-lg w-full text-center text-lg shadow-md transition-transform hover:scale-105 duration-300'
          >
            ¡Participa gratis!
          </Link>

          <p className='text-sm leading-relaxed text-center'>
            El sorteo finaliza el {''}
            <time dateTime='2023-10-15T18:00:00.000Z'>
              15 de octubre a las 18:00 hs
            </time>{' '}
            o cuando se agoten los tickets disponibles.
          </p>
        </div>
      </div>
    </div>
  );
}
