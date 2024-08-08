const { mongoClient, ServerApiVersion } = require('mongodb')
const mongoose  = require('mongoose')
const createAccount = require('./initAccount')
const createMission = require('./initMission')
const createInvestment = require('./initInvestment')

async function initDB() {
    try {
        const uri = 'mongodb+srv://saralynl:XfMFAzMZbKzQBuf8@cosmicquarry.guejfge.mongodb.net/?retryWrites=true&w=majority&appName=CosmicQuarry'

        await mongoose.connect(uri)
        console.log('MongoDB Connected...')

        //run initInvestment.js, initAccount.js, and initMission.js; this will delete all documents in each collection and add the seed data
        await createAccount()
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



