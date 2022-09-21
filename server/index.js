// server/index.js

const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors()); // Add cors middleware

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const CHAT_BOT = "Chat Bot";
let chatRoom = '';
let allUsers = [];

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  socket.on("join_room", (data) => {
    const { username, room } = data;
    socket.join(room);

    let __createdtime__ = Date.now();
    socket.to(room).emit("receive_message", {
      message: `${username} has joined the room`,
      username: CHAT_BOT,
      __createdtime__,
    });
    socket.emit("receive_message", {
        message: `Welcome to ${room} ${username}`,
        username: CHAT_BOT,
        __createdtime__,
        });
    chatRoom = room;
    allUsers.push({id: socket.id, username, room});
    chatRoomUsers = allUsers.filter((user) => user.room === room);
    socket.to(room).emit('chatroom_users', chatRoomUsers);
    socket.emit('chatroom_users', chatRoomUsers);

    // We can write our socket event listeners in here...
  });
});

server.listen(4000, () => "Server is running on port 3000");
