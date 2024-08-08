const Investment = require('./models/investment')
const Mission = require('./models/mission')
const Account = require('./models/account')

module.exports = async (req, res, next) => {

    //delete investments
    await Investment.deleteMany({});

    //find missions
    let mission1 = await Mission.findOne({missionName: "CosmoRock"})
    let mission2 = await Mission.findOne({missionName: "AstroMiner"})
    let mission3 = await Mission.findOne({missionName: "Stardust Collector"})

    //find accounts
    let account1 = await Account.findOne({firstName: "Saralyn"})
    let account2 = await Account.findOne({firstName: "John"})

    let investment1 = new Investment({
        investmentAmount: 39500, 
        investmentPercent: 28,
        accountID: account1._id,
        missionID: mission1._id
    })

    let investment2 = new Investment({
        investmentAmount: 20500,
        investmentPercent: 30,
        accountID: account1._id,
        missionID: mission2._id
    })

    let investment3 = new Investment({
        investmentAmount: 508498,
        investmentPercent: 50,
        accountID: account2._id,
        missionID: mission1._id
    })

    let investment4 = new Investment({
        investmentAmount: 2000,
        investmentPercent: 8,
        accountID: account2._id,
        missionID: mission1._id
    })

    await Promise.all([
        investment1.save(), 
        investment2.save(),
        investment3.save(),
        investment4.save()
    ])

    let currentInvestments = await Investment.find({});

    console.log(currentInvestments)

}