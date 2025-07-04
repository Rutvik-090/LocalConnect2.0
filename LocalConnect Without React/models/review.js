const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const reviewSchema = new Schema({
    comment:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
});

module.exports = mongoose.model("Review",reviewSchema);