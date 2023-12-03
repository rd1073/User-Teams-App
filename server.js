const express = require('express');
const mongoose = require("mongoose");
const { User}=require("./db")

const app = express();
const PORT = 4000;
app.use(express.json());
 


 

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });