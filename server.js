const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const PORT = process.env.PORT || 3001;
const router = require("./routes/login-out");
const userRouter = require("./controllers/api/userRoutes");
const user = require("./models/user.js");
const app = express();
// -----------------------------set morgan to log info about our requests for development use.
app.use(morgan("dev"));

// -----------------------------------------------initialize body-parser to parse incoming parameters requests to req.body *depricated
app.use(bodyParser.urlencoded({ extended: true }));

// ------------------------------------------initialize cookie-parser to allow us access the cookies stored in the browser.
app.use(cookieParser());

// ------------------------------initialize express-session to allow us track the logged-in user across sessions.
app.use(
  session({
    key: "user_sid",
    secret: "somerandomstuffs",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

//--------------------------- This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// -----------------------------This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.redirect('/')
  }
  next();
});




app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(router);
app.use(userRouter);

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