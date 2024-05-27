const mongoose = require("mongoose");
const initData = require("./data.js");

const Listing = require("../models/listing.js");
const listing = require("../models/listing.js");

main()
.then (() =>{
 console.log( "connect to db")
}).catch(err => console.log(err));
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/pizza')

};

const initDB = async()=>{
   await Listing.deleteMany({});
   await Listing.insertMany(initData.data);
   console.log(" ho  gya data save ")
}
initDB();