import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const CopyButton = ({ roomId }) => {
  const [roomIdCopied, setRoomIdCopied] = useState(false)

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId)
    setRoomIdCopied(true)
    setTimeout(() => setRoomIdCopied(false), 2000) // Reset copied state after 2 seconds
  }

  return (
    <button
      className='px-4 py-2 bg-white border border-gray-500 text-black rounded-full hover:bg-blue hover:text-white hover:border-transparent'
      onClick={copyRoomId}
    >
      {roomIdCopied ? 'Copied!' : 'Copy Room ID'}
      <FontAwesomeIcon icon={faCopy} className='ml-2' />
    </button>
  )
}

export default CopyButton
