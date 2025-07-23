const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req,res,next) =>{
    console.log(req.headers.authorization);
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"unauthorized user"});
    }
    const isBlackListed = await blacklistTokenModel({token:token});
    if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{ 
        const decoded = jwt.verify(token,process.env.JWT_SECRET); //returns the data we send while creating jwt
        const user = await userModel.findById(decoded._id);
        req.user = user;
        return next();
    }catch(err){
        return res.status(401).json({message:"unauthorized user"});
    }
}