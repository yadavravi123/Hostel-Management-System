const mongoose = require("mongoose");

const Query_report = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Phone_n: {
        type: Number,
        required: true,
        unique: true
    },
    Email_id: {
        type: String,
        required: true,
        unique: true
    },
    Query_s: {
        type: String,
        Requierd: true,
    }
})



const Contact = new mongoose.model("Contact", Query_report);
module.exports = Contact;