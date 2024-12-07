import ParticipantsCounter from '@/app/components/ParticipantsCounter';
import Image from 'next/image';
import Balancer from 'react-wrap-balancer';

export default function Rifa() {
  return (
    <main className='px-8'>
      <div className='bg-white rounded-sm shadow-md '>
        <Image
          alt='Rifa'
          src='/test.png'
          width={400}
          height={400}
          className='object-cover h-40 md:h-full w-full'
        />
        <div className='p-8 space-y-8'>
          {/* Sección principal - premio */}
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold text-center'>
              <Balancer>Gana $10 USDT</Balancer>
            </h2>
            <p className='leading-relaxed text-lg text-center'>
              ¿Te gustaría ganar $10 USDT sin mucho esfuerzo? ¡Participa en esta rifa y
              quien sabe, podrías ser el próximo afortunado! 🎉
            </p>
          </div>

          {/* Sección contador y participación */}
          <div className='space-y-6'>
            <ParticipantsCounter />

            <p className='text-sm leading-relaxed text-center'>
              El sorteo finaliza el {''}
              <time dateTime='2023-10-15T18:00:00.000Z'>
                15 de octubre a las 18:00 hs
              </time>{' '}
              o cuando se agoten los tickets disponibles.
            </p>

            <button className='bg-orange font-bold text-white py-3 px-4 inline-block rounded-lg w-full text-center text-lg shadow-md transition-transform hover:scale-105 duration-300'>
              ¡Participa gratis!
            </button>

            <small className='block text-sm text-center'>
              Al participar, aceptas las políticas de esta rifa.
            </small>
          </div>

          {/* Sección políticas */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold'>Políticas de la rifa</h3>
            <div
              className='prose prose-sm leading-relaxed'
              dangerouslySetInnerHTML={{
                __html: `
                <ul class="space-y-4">
                  <li><strong>Selección del ganador:</strong> El ganador será seleccionado de manera aleatoria entre todos los participantes.</li>
                  <li><strong>Notificación:</strong> Se enviará un correo electrónico al ganador con las instrucciones para reclamar su premio. El ganador tendrá 48 horas para responder y confirmar sus datos.</li>
                  <li><strong>Entrega del premio:</strong> El premio de $10 USDT será transferido dentro de las 24 horas siguientes a la confirmación de los datos del ganador.</li>
                  <li><strong>Opciones de pago:</strong>
                    <ul class="pl-6 mt-3 space-y-2">
                      <li>Transferencia directa de USDT (red TRC20)</li>
                      <li>Pago por Binance Pay</li>
                      <li>Transferencia bancaria local</li>
                    </ul>
                  </li>
                  <li><strong>Realización del sorteo:</strong> El sorteo se realizará una vez se complete el cupo de participantes.</li>
                  <li><strong>Publicación de resultados:</strong> Los resultados serán publicados en nuestras redes sociales además de la notificación por correo electrónico.</li>
                  <li><strong>Aceptación:</strong> La participación en esta rifa implica la aceptación de todas estas condiciones.</li>
                </ul>
              `,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
