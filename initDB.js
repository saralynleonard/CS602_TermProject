const { mongoClient, ServerApiVersion } = require('mongodb')
const mongoose  = require('mongoose')
const createAccount = require('./initAccount')
const createMission = require('./initMission')
const createInvestment = require('./initInvestment')
const createAsteroid = require('./initAsteroid')
require('dotenv').config()

async function initDB() {
    try {
        const uri = process.env.MONGO_URI

        await mongoose.connect(uri)
        console.log('MongoDB Connected...')

        //run initInvestment.js, initAccount.js, initAsteroid.js, and initMission.js; this will delete all documents in each collection and add the seed data
        await createAccount()
        await createAsteroid()
        await createMission()
        await createInvestment()
    } catch (error) {
        console.log(error)
    } finally {
        await mongoose.disconnect()
    }


    // const connectDB = async () => {
    //     try {
    //         await mongoose.connect(uri)
    //         console.log('MongoDB Connected...')
    //     } catch (error) {
    //         console.log(error)
    //         process.exit()
    //     }
    // }
    
}
initDB()



