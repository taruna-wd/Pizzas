

// controller for 
const { query } = require("express");
const Listing = require("../models/listing")
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req, res) => {
    const allListing = await Listing.find({});
    res.render("./listings/index.ejs", { allListing })

};

module.exports.newform = (req, res) => {
    res.render("./listings/new.ejs")
};

module.exports.show = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate('reviews');
    if (!listing) {
        req.flash("error", " your requested for  does not exit")
        res.redirect("/listings")
    }
    res.render("listings/show.ejs", { listing })
};


module.exports.create = async (req, res, next) => {
   let  response = await  geocodingClient.forwardGeocode({
        // query: "New delhi , india",
        query: req.body.listing.location,
        limit: 1
      })
        .send()
         console.log(response.body.features[0].geometry);  //for practice
        
    let url = req.file.path;
    let filename = req.file.filename;

    console.log(url, "..", filename)

    const newListing = new Listing(req.body.listing);
    // newListing.owner = req.user._id;

    newListing.image = {url,filename};

    newListing.geometry =response.body.features[0].geometry

     let saved = await newListing.save()

    req.flash("success", " new listing created")

    res.redirect("/listings")

    // let { title,description,image,price,location,country}= req.body ;



};

module.exports.edit = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing })
};


module.exports.update = async (req, res) => {
    let { id } = req.params;
    const update = await Listing.findByIdAndUpdate(id, { ...req.body.listing })
    
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename; 
   
 
    update.image = {url,filename};
    await update.save();
};
 req.flash("success" , "images update ")
    res.redirect(`/listings/${id}`)
};

module.exports.delete = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success", "Deleted !")
    res.redirect("/listings")
};




