const router = require("express").Router();
const sessionChecker= require("../sessionchecker");
const User = require("../models/user");

// route for Home-Page
router.get("/", sessionChecker, (req, res) => {
    res.redirect("/login");
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
        res.redirect("/home");
      }
    });
  });

  module.exports = router;