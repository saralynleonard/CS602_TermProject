const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountSchema = new Schema({
    firstName: String, 
    lastName: String, 
    email: String,
    isAdmin: Boolean
}, {collection: 'account'})

const Account = mongoose.model("Account", accountSchema)

module.exports = Account; 


