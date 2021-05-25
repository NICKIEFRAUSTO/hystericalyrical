const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/hystericaldb"
);
 const userseed = [
     {
    "username": "nickie",
    "password":"password",
    "email": "nickie@gmail.com"
    },
    {
    "username":"nathan",
    "password": "password",
    "email": "nathan@gmail.com"
     },
     {
         "username": "daniel",
         "password": "password",
         "email": "daniel@gmail.com"
     }
]