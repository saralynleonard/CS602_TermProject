const Investment = require('../models/investment')
const Mission = require('../models/mission')
const { ObjectId } = require('mongodb')

module.exports = async (req, res, next) => {
    let id = req.params.id

    if (ObjectId.isValid(id)) {
        let investment = await Investment.findById(id)

        res.render('editInvestmentView', {
            data: {
                id: investment._id,
                investmentAmount: investment.investmentAmount,
                investmentPercent: investment.investmentPercent,
                accountID: investment.accountID,
                missionID: investment.missionID
            }
        })
    } else {
        res.render('404')
    }
}