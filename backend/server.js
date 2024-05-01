const express = require('express')
const dotenv = require('dotenv')
const connectToMongoDB = require('./connection/connection')
const cookieParser = require('cookie-parser')

const authRoutes = require('./route/authRoutes')
const messageRoutes = require('./route/message')
const userRoutes = require('./route/userRoute')

const {app, server} = require('./socket/socket')

dotenv.config()

const PORT = process.env.PORT || 4000

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