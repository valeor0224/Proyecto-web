const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({
    donor_dui: {
        type: String,
        trim: true,
        required: true,
    },
    
    donor_name: {
        type: String,
        trim: true,
        required: true,
    },

    donor_last_name: {
        type: String,
        trim: true,
        required: true,
    },

    donor_phone_number: {
        type: String,
        trim: true,
        required: true,
    },

    donor_address: {
        type: String,
        trim: true,
        required: true,
    },

    donor_email: {
        type: String,
        trim: true,
        required: true,
    },

    amount: {
        type: Double,
        required: true,
    },

    donation_date: {
        type: Date,
    },

    donation_method: {
        type: String,
        trim: true,
        required: true,
    },
    donation_proposite: {
        type: String,
        trim: true,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("donation", PetSchema);