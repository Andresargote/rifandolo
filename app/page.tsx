import MainRaffle from './components/MainRaffle';

export default function Home() {
  return (
    <>
      <div className='px-8 flex items-center gap-2'>
        <h2 className='text-darkGray font-bold uppercase'>Rifas activas</h2>
        <picture>
          <source
            srcSet='https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.webp'
            type='image/webp'
          />
          <img
            src='https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.gif'
            alt='💸'
            width='26'
            height='26'
          />
        </picture>
      </div>
      <main className='px-8 py-10'>
        <section>
          <MainRaffle />
        </section>
      </main>
    </>
  );
}
