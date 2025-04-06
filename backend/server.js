require('dotenv').config()
const express = require('express')
const connectToMongoDB = require('./connection/connection')
const cors = require('cors');
const cookieParser = require('cookie-parser')

const authRoutes = require('./route/authRoutes')
const messageRoutes = require('./route/message')
const userRoutes = require('./route/userRoute')

const {app, server} = require('./socket/socket')

const PORT = process.env.PORT || 4000


// Add this before routes
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));


// Default middlewares
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/users', userRoutes)

server.listen(PORT, ()=>{
    connectToMongoDB()
    console.log(`Server started at ${PORT}`);
})