const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema

const DigimonSchema = new Schema({
    name: { type: String, required: true, unique: true},
    img: { type: String,  required: true, unique: true},
    level: { type: String,  required: true, unique: true}
})

DigimonSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Digimon", DigimonSchema);