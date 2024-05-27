

const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js")
const Review = require("../models/reviews.js");

const Listing = require("../models/listing.js");

const reviewController = require("../controller/review.js")

const validateReview = (req, res, next) => {

   let { error } = reviewSchema.validate(req.body);
   // console.log( result);
   if (error) {
      let errMsg = error.details.map((el) => el.message).join(",");

      throw new ExpressError(400, errMsg)
   } else {
      next()
   }
};




// reviews Post route 

router.post("/:id/reviews",
   validateReview,
   wrapAsync(reviewController.createReview));


// delete route
router.delete("/:id/reviews/:reviewId", wrapAsync(reviewController.deleteReview));

module.exports = router;