const express = require('express');
const mongoose = require("mongoose");
const { User}=require("./db")
const userRoutes = require("./route/userRoutes")
const app = express();
const PORT = 4000;
app.use(express.json());


 
app.use('/api/get', userRoutes); //get all the user's posts
 

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });