
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    url: String,
    click: {type: Number, required: true}
})

module.exports = mongoose.model('Link', linkSchema)
