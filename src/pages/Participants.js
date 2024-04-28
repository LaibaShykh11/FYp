import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import Client from './Client'
const Participants = ({ onClose, participants }) => {
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
      <div className='relative bg-white rounded-xl px-20 py-10 flex flex-col gap-5 items-center'>
        <FontAwesomeIcon
          className='text-black text-xl absolute top-4 right-4 cursor-pointer'
          icon={faClose}
          onClick={onClose}
        />
        <h1 className='font-bold text-2xl text-center text-black mb-4'>
          Participants
        </h1>
        <div className='flex flex-col gap-4 w-full mb-4'>
          <div className='text-black mb-2'>Joined</div>
          <div className='clientsList'>
            {participants.map((client) => (
              <Client key={client.socketId} username={client.username} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Participants
