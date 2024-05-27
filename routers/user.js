const express = require("express");
const router =  express.Router();
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { route } = require("./listing");
const { saveRedirectUrl } = require("../middleware");

const userController = require("../controller/user")
router.get("/signup" , async(req,res)=>{
    res.render("users/signup.ejs")
 });

router.post("/signup", wrapAsync(userController.signup));

router.get("/login" , async(req,res)=>{
    res.render("users/login.ejs")
 });


 router.post("/login",
//  saveRedirectUrl,
 passport.authenticate('local', { failureRedirect: '/login' , failureFlash :true }),
 wrapAsync( userController.login));

router.get("/logout", userController.logout)
module.exports = router;