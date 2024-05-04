import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import toast from 'react-hot-toast'

const CopyButton = ({ roomId }) => {
  async function copyRoomId() {
    try {
      await navigator.clipboard.writeText(roomId)
      toast.success('Room ID has been copied to your clipboard')
    } catch (err) {
      toast.error('Could not copy the Room ID')
      console.error(err)
    }
  }

  return (
    <button
      className='px-4 py-2 bg-blue border border-gray-500 text-white rounded-full hover:bg-purple hover:text-white hover:border-transparent'
      onClick={copyRoomId}
    >
      Copy Room Id
      <FontAwesomeIcon icon={faCopy} className='ml-2' />
    </button>
  )
}

export default CopyButton
