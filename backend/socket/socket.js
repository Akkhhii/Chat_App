const {Server} = require('socket.io');
const http = require('http');
const express = require('express');

const app = express();

const server = http.createServer(app);
const io = new Server(server,{
    cors: {
        origin:["https://chat-buddy-uo0x.onrender.com"],
        methods:["GET","POST"],
    },
});

const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on("connection", (socket)=>{
    console.log("User connected", socket.id);

    const userId = socket.handshake.query.userId;
    if(userId != "undefined") userSocketMap[userId] = socket.id;

    console.log(userId);

    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on("disconnect", ()=>{
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})

module.exports = {app, io, server, getReceiverSocketId}