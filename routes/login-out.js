const router = require("express").Router();
const sessionChecker= require("../sessionchecker");
const User = require("../models/user");

// ----------------------route for Home-Page
router.get("/", sessionChecker, (req, res) => {
    res.redirect("/login");
  });

  // -----------------------route for user-login //
router
.route('/login')
.get(sessionChecker, (req, res)=>{
  res.sendFile(_dirname + "/src/components/Login.js");
})
.post(async (req, res)=> {
  const username = req.body.usename,
  password = req.body.password;

  try{
    const user = await User.findOne({ username: username }).exec();
    if(!user){
      res.redirect('login');
    }
    user.comparePassword(password, (error, match)=> {
      if(!match) {
        res.redirect('/login');
      }
    });
    req.session.user = user;
    res.redirect('/dashboard');
  } catch (error) {
    console.log (error)
  }
});

  router
  .route("/Signup")
  .post((req, res) => {

    const user = new User({
      username: req.body.username,
      password:req.body.password,
    });
    user.save((err, docs) => {
      if (err) {
        res.redirect("/Signup");
      } else {
          console.log(docs)
        req.session.user = docs;
        res.redirect("/");
      }
    });
  });

  module.exports = router;