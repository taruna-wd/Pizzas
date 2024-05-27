

const express = require("express");
const { listingSchema } = require("../schema.js")
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { islogIn } = require("../middleware.js");

const router = express.Router();
const multer = require('multer')
const { storage } = require("../cloud_config.js");
const reviews = require("../models/reviews.js");
const upload = multer({ storage });

const listingController = require("../controller/listing.js")




const validateListing = (req, res, next) => {

  let { error } = listingSchema.validate(req.body);
  console.log(result);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");

    throw new ExpressError(400, errMsg)
  } else {
    next()
  }
};
// index route
router.get("/", wrapAsync(listingController.index));


router.post("/"),( async (req, res) => {
  // const allListing = await Listing.find({}) ;
  res.send(req.file)

});
// new route

router.get("/new",
  islogIn, listingController.newform)




// show route
router.get("/:id", wrapAsync(listingController.show));


//create route
router.post("/",
  // validateListing,
 upload.single('listing[image]'),
  wrapAsync(listingController.create));

//  edit route

router.get("/:id/edit",
  islogIn,
  wrapAsync(listingController.edit));

// update route

router.put("/:id",
  islogIn,
  // isOwner,
  // validateListing,
  upload.single('listing[image]'),

  wrapAsync(listingController.update));

// delete route

router.delete("/:id",
  islogIn,
  wrapAsync(listingController.delete));



module.exports = router;  