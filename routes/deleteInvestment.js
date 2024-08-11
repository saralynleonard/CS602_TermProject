const Investment = require('../models/investment')
const Mission = require('../models/mission')

module.exports = async (req, res, next) => {
    id = req.params.id
    console.log(id)

    let getInvestment = await Investment.findById(id)
    let investment = {
        id: getInvestment._id, 
        investmentAmount: getInvestment.investmentAmount
    }

    let getMission = await Mission.findOne({_id: getInvestment.missionID})
    let mission = {
        missionName: getMission.missionName
    }

    res.render('deleteInvestmentView', {data: {investment, mission}})
}