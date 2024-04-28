import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faClose } from '@fortawesome/free-solid-svg-icons'
import CopyButton from './CopyButton'

const Share = ({ roomId, onClose }) => {
  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId)
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
      <div className='relative bg-white rounded-xl px-20 py-10'>
        <div className='font-bold text-2xl text-center mb-4'>Share</div>
        <div className='flex justify-center items-center mb-4'>
          <CopyButton roomId={roomId} />
        </div>
        <FontAwesomeIcon
          className='text-black text-xl absolute top-4 right-4 cursor-pointer'
          icon={faClose}
          onClick={onClose}
        />
      </div>
    </div>
  )
}

export default Share
