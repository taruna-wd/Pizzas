
const User =  require("../models/user")
module.exports.signup = async(req,res)=>{
    try {
        let {username,email,password,}= req.body;
        const  newUser =  new User({email,username});
         const  newragister =  await User.register(newUser , password);
        console.log(newragister)
        req.login(newragister , (err)=>{
        if(err){
         return next(err);
         }
        })
        req.flash("success" , "  welcome to pizzas")
        res.redirect("/listings")

    } catch (error) {
        req.flash("error",error.message);
        res.redirect("./signup")
    }
       
   
};
module.exports.login =async(req,res)=>{
    req.flash("success"," welcome to pizzas ")
    // let redirect =  res.locals.redirectUrl || "/listings";
    // res.redirect(redirect)
    res.redirect("/listings")
};

module.exports.logout = async(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next()
        };
        req.flash("success" , " your are logged out")
        res.redirect("./listings")
    });
};