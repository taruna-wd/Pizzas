const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title : {
    type:String,
    required:true
  },
  description : String,
  image : {
    url: String, 
    filename : String
    // type:String,
    // default: "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/bold-bbq-veggies.8cd7bdc4b90ad70c7acfbfdf86a812a1.1.jpg", // yh h jb koi image hi na upload kare to yh image automatic show hogi
    // set:(v)=> v === ""?"https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/bold-bbq-veggies.8cd7bdc4b90ad70c7acfbfdf86a812a1.1.jpg" :v // jb images link to h but image dikh nhi rahi
  },
  price :Number,
  location:String,
  country:String,
  reviews :[
    {
      type : Schema.Types.ObjectId ,
      ref :"Review"
    }
  ],
  owner :{
    type : Schema.Types.ObjectId ,
      ref :"User"
  },
  geometry :{
    type :{
      type:String,
      enum :['Point'],
      required : true
    },
    coordinates :{
      type : [Number],
      requires :true
   }
  }
  
   
});

const listing = mongoose.model("listing",listingSchema);
 module.exports = listing;