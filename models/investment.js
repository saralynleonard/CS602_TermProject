const mongoose = require('mongoose')
const Schema = mongoose.Schema

const investmentSchema = new Schema({
    investmentAmount: Number,
    investmentPercent: Number,
    paymentAmount: Number,
    accountID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account"
    },

    missionID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Mission"
    }

}, {collection: 'investment'})

const Investment = mongoose.model("Investment", investmentSchema)

module.exports = Investment; 

