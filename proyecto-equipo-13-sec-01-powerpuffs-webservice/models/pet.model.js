const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    story: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        trim: true,
        required: true,
    },
    qualities: {
        type: [String],
        defaul: [],
    },
    condition: {
        type: String,
        trim: true,
    },
    age: {
        type: String,
        trim: true,
        required: true,
    },
    colour: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("pet", PetSchema);