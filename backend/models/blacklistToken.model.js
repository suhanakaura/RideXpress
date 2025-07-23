const mongoose = require("mongoose");
const blacklistToken = new mongoose.Schema({
    token: {
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:86400 //deletes the document automatically after 24 hours
    }
});

module.exports = mongoose.model('BlacklistToken',blacklistToken);
