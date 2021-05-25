const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userschema = new Schema({
  email: string,
  username: string,
  passwordhash: string, 
  passwordsalt: string
});


module.exports = mongoose.model("user", userschema);

 
