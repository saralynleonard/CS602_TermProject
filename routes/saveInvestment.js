const Investment = require('../models/investment')

module.exports = async (req, res, next) => {
    let investment = new Investment({
        investmentAmount: req.body.investmentAmount, 
        accountID: req.body.accountID,
        missionID: req.body.missionID
    })

    await investment.save()
    res.redirect('/login')
} 