
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');


express()

    // .use(helmet())
    .use(morgan('tiny'))
    .use(express.json())
    .use(helmet())
//Endpoints 
    .get("/hello", (req,res)=> {
        res.status(200).json({status:200, message :"adhfgjhsdf"})
    })
   
   //expect the body of username and password to .env)

    // this is our catch all endpoint.

    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })


 // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => {console.log(`Server listening on port 8000`)})