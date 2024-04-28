import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faClose } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Leave = ({ onClose }) => {
  const navigate = useNavigate()
  const leave = () => {
    navigate(`/Home`)
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
      <div className='relative bg-white rounded-xl px-20 py-10'>
        <div className='font-bold text-2xl text-center mb-4'>Leave Room</div>
        <h5>Are your sure you want to leave?</h5>
        <div className='flex justify-center items-center mb-4 pt-2'>
          <button
            onClick={leave}
            className='px-4 py-2 bg-red border text-white rounded-full hover:bg-darkred hover:text-white hover:border-transparent'
          >
            Leave
          </button>
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

export default Leave
