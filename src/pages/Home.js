import React, { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [roomId, setRoomId] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate()
  const createNewRoom = (e) => {
    e.preventDefault()
    const id = uuidV4()
    setRoomId(id)
    toast.success('Created a new room')
  }
  const joinRoom = () => {
    if (!roomId || !username) {
      toast.error('ROOM Id & Username is required')
      return
    }
    navigate(`/MainPage/${roomId}`, { state: { username } })
  }
  const handleInputEnter = (e) => {
    console.log('event', e.code)
    if (e.code === 'Enter') {
      joinRoom()
    }
  }
  return (
    <div
      className='homePageWrapper container-fluid'
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className='formWrapper'>
        <img
          className='homePageLogo'
          src='/codecollab.png'
          alt='codecollab-logo'
        />
        <div className='inputGroup'>
          <div className='inputicon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-person'
              viewBox='0 0 16 16'
            >
              ::before
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
            </svg>
          </div>
          <input
            type='text'
            className='inputBox'
            placeholder='ROOM ID'
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />

          <div className='inputicon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              class='bi bi-person'
              viewBox='0 0 16 16'
            >
              ::before
              <path d='M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z' />
            </svg>
          </div>
          <input
            type='text'
            className='inputBox'
            placeholder='USERNAME'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            onKeyUp={handleInputEnter}
          />

          <button onClick={joinRoom} className='btn joinBtn'>
            JOIN
          </button>

          <span className='createInfo'>
            If you don't have an invite then create
          </span>
          <button onClick={createNewRoom} className='btn createNewBtn'>
            NEW ROOM
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
