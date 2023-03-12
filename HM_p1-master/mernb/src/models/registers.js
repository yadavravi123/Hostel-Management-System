const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const employeeScheme = new mongoose.Schema({
    Full_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    Scholar_Number: {
        type: Number,
        required: true,
        unique: true
    },
    Phone_no: {
        type: Number,
        required: true,
        unique: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    DOBs: {
        type: String,
        required: true
    },
    Year_of_study: {
        type: Number,
        required: true
    },
    Course: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true
    }

})

employeeScheme.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);

        this.confirm_password = undefined;
    }

    next();

})


const Register = new mongoose.model("Register", employeeScheme);
module.exports = Register;