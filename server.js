const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const { User}=require("./db")
const userRoutes = require("./route/userRoutes")
const app = express();
const PORT = 4000;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    // <-- location of the react app were connecting to
    credentials: true,
  })
);


 
app.use('/api/get', userRoutes); //get all the user's posts
 

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });