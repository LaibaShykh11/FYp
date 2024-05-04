const express = require('express')
const app = express()
const http = require('http')
const path = require('path')
const { Server } = require('socket.io')
const ACTIONS = require('./src/Actions')

const server = http.createServer(app)
const io = new Server(server)

app.use(express.static('build'))
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const userSocketMap = {}
function getAllConnectedClients(roomId) {
  // Map
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        username: userSocketMap[socketId],
      }
    }
  )
}

io.on('connection', (socket) => {
  console.log('socket connected', socket.id)

  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username
    socket.join(roomId)
    const participants = getAllConnectedClients(roomId)
    participants.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        participants,
        username,
        socketId: socket.id,
      })
    })
  })

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, code }) => {
    socket.in(roomId).emit(ACTIONS.CODE_CHANGE, { code })
  })
  socket.on(ACTIONS.TITLE_CHANGE, ({ roomId, title }) => {
    io.in(roomId).emit(ACTIONS.TITLE_CHANGE, { title })
  })

  socket.on(ACTIONS.SEND_MESSAGE, ({ text }) => {
    const username = userSocketMap[socket.id]
    io.to(socket.rooms[0]).emit(ACTIONS.RECIEVE_MESSAGE, {
      sender: username,
      text: text,
    })
  })

  socket.on(ACTIONS.SYNC_CODE, ({ socketId, code }) => {
    io.to(socketId).emit(ACTIONS.CODE_CHANGE, { code })
  })

  socket.on('disconnecting', () => {
    const rooms = [...socket.rooms]
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      })
    })
    delete userSocketMap[socket.id]
    socket.leave()
  })
})

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Listening on port ${PORT}`))
