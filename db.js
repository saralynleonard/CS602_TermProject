const { mongoClient, ServerApiVersion } = require('mongodb')
const mongoose  = require('mongoose')
const { SiTricentis } = require('react-icons/si')
require('dotenv').config()

const uri = process.env.MONGODB_URI;
// const credentials = require('./credentials')
// const dbUrl = 'mongodb+srv://' + credentials.username + ':' + credentials.password + '@' + credentials.host + '/' + credentials.database

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('MongoDB Connected...')
    } catch (error) {
        console.log(error)
        process.exit()
    }
}



module.exports = connectDB

