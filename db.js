const { mongoClient, ServerApiVersion } = require('mongodb')
const mongoose  = require('mongoose')
const { SiTricentis } = require('react-icons/si')

const uri = 'mongodb+srv://saralynl:XfMFAzMZbKzQBuf8@cosmicquarry.guejfge.mongodb.net/?retryWrites=true&w=majority&appName=CosmicQuarry'
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

