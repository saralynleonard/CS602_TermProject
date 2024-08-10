const mongoose = require('mongoose')
const Schema = mongoose.Schema

const asteroidSchema = new Schema({
    asteroidName: String,
    designation: String,
    discoveryDate: Date,
    spectralType: String,
    composition: String,
    locationRegion: String
}, {collection: 'asteroid'})

const Asteroid = mongoose.model("Asteroid", asteroidSchema)

module.exports = Asteroid;