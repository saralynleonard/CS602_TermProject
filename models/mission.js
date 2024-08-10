const mongoose = require('mongoose')
const Schema = mongoose.Schema

const missionSchema = new Schema({
    missionName: String, 
    launchDate: Date,
    aboutMission: String,
    predictedMaterial: String, 
    missionCost: Number,
    targetAsteroid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Asteroid"
    },
    materialSold: Number, 
    isFeatured: Boolean,
    isComplete: Boolean
}, {collection: 'mission'})

const Mission = mongoose.model("Mission", missionSchema)

module.exports = Mission