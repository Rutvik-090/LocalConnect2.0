const express = require("express");
const router = express.Router({ mergeParams: true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const userController = require("../controllers/userController.js");


// post

router.post(
  "/signup",
  wrapAsync(userController.signup)
);

  // login
  
  // post
  
router.post(
    "/login",
    userController.login
);
  
router.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});

router.get("/logout", userController.logout);
  

module.exports = router;
  