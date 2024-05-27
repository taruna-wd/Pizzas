
const Listing = require("../models/listing")
const Review = require ("../models/reviews")


module.exports.createReview =async (req, res) => {
    const {id}= req.params;
    console.log(id)
    //find listing by id
 
    let listing = await Listing.findById(id);
    
    console.log(listing)
    if(!listing){
       return res.send("no such listings found")
    }
    //crate new review using tha reqesr body
    let newReview = new Review(req.body.review);
 
    listing.reviews.push(newReview);
 
    await newReview.save();
    await listing.save();
 
    console.log("Saved review");
    // res.send("Review saved");                                                                                                                                                                                                                             
    res.redirect(`/listings/${id}`);
 };
 module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash("success!", "deleted reviews")
 
    res.redirect(`/listings/${id}`)
 };