const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const User = require("./models/user.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hystericaldb", { useNewUrlParser: true });

app.post("/submit", ({ body }, res) => {
  User.create(body)
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// --------------------------------testing bcrypt password hashing------------------------//
// create a user a new user
// const testUser = new User({
//   username: "jmar777",
//   password: "Password",
// });

// // save user to database
// testUser.save(function(err) {
//   if (err) throw err;
// });

// // fetch user and test password verification
// User.findOne({ username: 'jmar777' }, function(err, user) {
//   if (err) throw err;

//   // test a matching password
//   user.comparePassword('Password123', function(err, isMatch) {
//       if (err) throw err;
//       console.log('Password123:', isMatch); // -> Password123: true
//   });

//   // test a failing password
//   user.comparePassword('123Password', function(err, isMatch) {
//       if (err) throw err;
//       console.log('123Password:', isMatch); // -> 123Password: false
//   });
// });