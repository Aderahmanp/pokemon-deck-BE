const mongoose = require("mongoose");
const Schema = mongoose.Schema

const DigimonSchema = new Schema({
    name: { type: String},
    img: { type: String},
    level: { type: String}
})

module.exports = mongoose.model("Digimon", DigimonSchema);