export default function ParticipantsCounter() {
  return (
    <div className='p-4 bg-lightGray rounded-lg flex flex-col gap-4'>
      <p className='font-bold'>Participantes: 50/100</p>
      <div className='w-full bg-white rounded-full h-2.5'>
        <div className='bg-blue h-2.5 rounded-full' style={{ width: `50%` }}></div>
      </div>
    </div>
  );
}
