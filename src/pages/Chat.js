import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClose,
  faPaperPlane,
  faSmile,
} from '@fortawesome/free-solid-svg-icons'

const Chat = ({ onClose }) => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleMessageSend = () => {
    if (inputMessage.trim() === '') return
    setMessages([...messages, { sender: 'You', text: inputMessage }])
    setInputMessage('')
  }

  const handleEmojiSelect = (emoji) => {
    setInputMessage(inputMessage + emoji.native)
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm'></div>
      <div className='relative bg-white rounded-xl px-10 py-10 w-96'>
        <h1 className='font-bold text-2xl text-center text-black'>Chat</h1>
        <div className='h-72 overflow-y-auto bg-white p-2 rounded-lg'>
          {messages.map((message, index) => (
            <div key={index} className='mb-2'>
              <div className='font-bold'>{message.sender}</div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        <div className='flex justify-between mt-4'>
          <input
            type='text'
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className='w-42 px-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-gray-400'
            placeholder='Type here...'
            style={{ fontSize: '16px' }}
          />
          <div className='relative flex'>
            <button
              className='px-4 py-2 text-black rounded-full hover:bg-blue-600 focus:outline-none'
              onClick={() => handleEmojiSelect('😊')}
            >
              <FontAwesomeIcon icon={faSmile} />
            </button>
            <button
              className='px-4 py-2 bg-blue-400 text-black rounded-full hover:bg-blue-400 focus:outline-none'
              onClick={handleMessageSend}
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
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

export default Chat
