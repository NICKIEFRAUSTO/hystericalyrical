const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String, 
    lowercase: true, 
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    index: true
  
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    index: true
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.setFullName = function() {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};


const User = mongoose.model("User", UserSchema);

module.exports = User;
