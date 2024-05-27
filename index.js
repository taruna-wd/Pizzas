if(process.env.NODE_ENV != "production"){
   require('dotenv').config()

}

// console.log(process.env) 


const express = require("express");
const app = express();
const mongoose = require("mongoose"); // for database mongoose package connect with mongo database
const Listing = require("./models/listing.js");
const methodOverride = require('method-override'); // method post and put
const ejsMate = require('ejs-mate');
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js")
const Review = require("./models/reviews.js");
const session = require("express-session")
const MongoStore = require('connect-mongo');

const passport = require("passport"); // for hashing pswd authenticate and authorisation
const LocalStrategy = require("passport-local");
const User  = require("./models/user.js")
const flash = require("connect-flash")



// // for routing
const path = require("path");
const listing = require("./models/listing.js");

app.set("view engine", "ejs");   //for pages 
app.set("views", path.join(__dirname, "views")); //for pages  inside in views directory(folder)
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method")); // for put and delete from database  edit and delete route
app.engine('ejs', ejsMate); // for template like header and footer same every pages

app.use(express.static(path.join(__dirname, "/public"))) // for static webpages folder is public

// // to build  database connection
const atlasUrl = process.env.ATLAS_SERVER_URL ; // online cloud database for deploy purpose
// const mongoUrl = 'mongodb://127.0.0.1:27017/pizza';  // for local system mondo db database
main()
   .then(() => {
      console.log("connect to db")
   }).catch(err => console.log(err));
async function main() {
   await mongoose.connect(atlasUrl) // pizza is name of data base in mongo db

}



 const store = MongoStore.create ({
   mongoUrl: atlasUrl ,
   crypto: {
      secret: process.env.SECRET 
    },
    mysuperstring : 24 *3600 // Will be updated once in 24 hrs

 })

 const sessionOption={
   store,
   secret : process.env.SECRET,
   resave : false,
   saveUninitialized:true,
   cookie : {
      expires : Date.now() +  7 *24 * 60 *60 *1000 , //  save for 7 days  24 hours 60 min 60 sec 1000 mili-sec
      maxAge :  7 *24 * 60 *60 *1000
   }
}
app.use(session (sessionOption));
app.use(flash());
app.use(passport.initialize())
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
   res.locals.success = req.flash("success");
   res.locals.error = req.flash("error");
   res.locals.currUser = req.user;
   next();
});




// routers
const listings = require("./routers/listing.js")
const reviews = require("./routers/review.js")
const userRouter = require("./routers/user.js")



app.use("/listings", listings);
app.use("/listings", reviews)
app.use("/", userRouter)






app.all("*" ,(req,res,next)=>{
   next(new ExpressError(404 ," page not found"));
});

app.use((err, req, res, next) => {
   let { status = 500, message = "somthing wrong" } = err
   res.render("error.ejs", { err })
   // res.status(status).send(message)

});


app.listen(8080, () => {
   console.log("connection bn chuka h")
});


