const mongoose = require('mongoose');


const enrollSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number,
    course: String,
    address: String
}, {
    timestamps: true
})

const enrollModel = mongoose.model("enrollments", enrollSchema)

module.exports = enrollModel