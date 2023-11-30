const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

const PetSchema = new Schema({
title:{
    type:String,
    trim:true,
    required:true
},
description:{
    type:String,
    trim:true,
    required:true
},
publication_date:{
    type:Date,
   // default:Date.now
},
image:{
    //URL de la imagen
    type:String,
    trim:true
},
label:{
    type:String,
    trim:true,
    required:true
},

publication_zone:{
    Type:String,
    trim:true,
},

author_name:{
    Type:String,
    trim:true,
},

hidden:{
type:Boolean,
default: false
},
},{ timestamps:true});

module.exports = mongoose.model("article", PetSchema);