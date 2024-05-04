import { useState, useEffect, useRef } from 'react'
import { initSocket } from '../socket'
import { useLocation, useNavigate, Navigate, useParams } from 'react-router-dom'
import ACTIONS from '../Actions'
import toast from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faPenNib,
  faShare,
  faUserFriends,
  faSignOut,
  faShareAlt,
} from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { AnimatePresence, motion } from 'framer-motion'
import Participants from './Participants'
import Chat from './Chat'
import Share from './Share'
import Leave from './Leave'
import Editor from './Editor'

const MainPage = () => {
  const [title, setTitle] = useState('Untitled')
  const [chatMessages, setChatMessages] = useState([])
  const [isTitle, setisTitle] = useState('')
  const [showParticipants, setShowParticipants] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [showShare, setShowShare] = useState(false)
  const [showLeave, setShowLeave] = useState(false)
  const [participants, setParticipants] = useState([])

  const socketRef = useRef(null)
  const codeRef = useRef(null)
  const location = useLocation()
  const { roomId } = useParams()
  const reactNavigator = useNavigate()

  useEffect(() => {
    const init = async () => {
      //Initialize socket connection
      socketRef.current = await initSocket()
      socketRef.current.on('connect_error', (err) => handleErrors(err))
      socketRef.current.on('connect_failed', (err) => handleErrors(err))

      // Error handling for socket connection
      function handleErrors(e) {
        console.log('socket error', e)
        toast.error('Socket connection failed, try again later.')
        reactNavigator('/')
      }

      // Join the room
      socketRef.current.emit(ACTIONS.JOIN, {
        roomId,
        username: location.state?.username,
        title: title,
      })

      // Listening for joined event
      socketRef.current.on(
        ACTIONS.JOINED,
        ({ participants, username, socketId }) => {
          if (username !== location.state?.username) {
            toast.success(`${username} joined the room.`)
            console.log(`${username} joined`)
          }
          setParticipants(participants)
          socketRef.current.emit(ACTIONS.SYNC_CODE, {
            code: codeRef.current,
            socketId,
          })
        }
      )
      // Listening for title change event
      socketRef.current.on(ACTIONS.TITLE_CHANGE, ({ title }) => {
        setTitle(title)
      })

      // Listening for chat event
      socketRef.current.on(ACTIONS.RECIEVE_MESSAGE, ({ sender, text }) => {
        setChatMessages((prevMessages) => [...prevMessages, { sender, text }])
      })

      // Listening for disconnected event
      socketRef.current.on(ACTIONS.DISCONNECTED, ({ socketId, username }) => {
        toast.success(`${username} left the room.`)
        setParticipants((prev) => {
          return prev.filter((client) => client.socketId !== socketId)
        })
      })
    }
    init()
    // Clean up on unmount
    return () => {
      socketRef.current.disconnect()
      socketRef.current.off(ACTIONS.JOINED)
      socketRef.current.off(ACTIONS.DISCONNECTED)
      socketRef.current.off(ACTIONS.RECIEVE_MESSAGE)
    }
  }, [])

  if (!location.state) {
    return <Navigate to='/' />
  }

  // Function to handle title change
  const handleTitleChange = (title) => {
    setTitle(title)
    socketRef.current.emit(ACTIONS.TITLE_CHANGE, { roomId, title: title })
  }
  return (
    <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden bg-black'>
      {/* header section */}
      <header className='w-full flex items-center justify-between px-6 '>
        <div className='flex items-center justify-center gap-3'>
          {/* Logo */}
          <img className='w-15 h-12 pt-1 object-contain' src='/logo3.png' />
          {/* title */}
          <div className='flex items-center justify-center gap-3'>
            <AnimatePresence>
              {isTitle ? (
                <>
                  <motion.input
                    key={'TitleInput'}
                    className='px-0 py-0 rounded-md border-l-transparent '
                    type='text'
                    placeholder='Your Title'
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                  />
                </>
              ) : (
                <>
                  <motion.p
                    key={'titleLabel'}
                    className='px-0 py-0 text-white text-lg'
                  >
                    {title}
                  </motion.p>
                </>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isTitle ? (
                <>
                  <motion.div
                    key={'MdCheck'}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                    onClick={() => setisTitle(false)}
                  >
                    <FontAwesomeIcon
                      className='text-emerald-500 text-2xl '
                      icon={faCheck}
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div
                    key={'MdEdit'}
                    whileTap={{ scale: 0.9 }}
                    className='cursor-pointer'
                    onClick={() => setisTitle(true)}
                  >
                    <FontAwesomeIcon
                      className='text-white'
                      icon={faPenNib}
                      size='lg'
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className='flex items-center justify-end gap-6 pr-8'>
          {/*Chat*/}
          <div>
            <FontAwesomeIcon
              className='text-white text-xl'
              icon={faComment}
              onClick={() => setShowChat(true)}
            />
            {showChat && (
              <Chat
                socketRef={socketRef}
                participants={participants}
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                onClose={() => {
                  setShowChat(false)
                }}
              />
            )}
          </div>
          {/*Participants*/}
          <div>
            <FontAwesomeIcon
              className='text-white text-xl'
              icon={faUserFriends}
              onClick={() => setShowParticipants(true)}
            />
            {showParticipants && (
              <Participants
                participants={participants}
                onClose={() => {
                  setShowParticipants(false)
                }}
              />
            )}
          </div>
          {/*Copy Room Id*/}
          <div>
            <FontAwesomeIcon
              className='text-white text-xl'
              icon={faShareAlt}
              onClick={() => setShowShare(true)}
            />
            {showShare && (
              <Share
                roomId={roomId}
                onClose={() => {
                  setShowShare(false)
                }}
              />
            )}
          </div>
          {/*Leave Room*/}
          <div>
            <FontAwesomeIcon
              className='text-white text-xl'
              icon={faSignOut}
              onClick={() => setShowLeave(true)}
            />
            {showLeave && (
              <Leave
                onClose={() => {
                  setShowLeave(false)
                }}
              />
            )}
          </div>
        </div>
      </header>
      {/*Editor*/}
      <Editor
        socketRef={socketRef}
        roomId={roomId}
        onCodeChange={(code) => {
          codeRef.current = code
        }}
      />
    </div>
  )
}

export default MainPage
