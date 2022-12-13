
const express = require('express');

const helmet = require('helmet');
const morgan = require('morgan');
// const server = require('http').Server();
const http = require('http').Server();
const cors = require('cors');
const PORT = 4000;


express()

    .use(morgan('tiny'))
    .use(express.json())
    .use(helmet())
    .use(cors())

    // add Socket.io to the project to create a real-time connection
    const io = require('socket.io')(http, {
        cors: {
            origin: "http://localhost:3000"
        }
    })

    io.on('connection', (socket) => {
        console.log(`⚡: ${socket.id} user just connected!`);
        socket.on('disconnect', () => {
          console.log('🔥: A user disconnected');
        });
    })

//Endpoints 
    // .get("/hello", (req,res)=> {
    //     res.json({ message :"adhfgjhsdf"})
    // })
   
   //expect the body of username and password to .env)

    // this is our catch all endpoint.

    // .get("*", (req, res) => {
    //     res.status(404).json({
    //     status: 404,
    //     message: "This is obviously not what you are looking for.",
    //     });
    // })


 // Node spins up our server and sets it to listen on port 8000.
    // .listen(8000, () => {console.log(`Server listening on port 8000`)})
    http.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`)})