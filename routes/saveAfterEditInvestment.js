const Investment = require('../models/investment')

module.exports = async (req, res, next) => {
    let id = req.body.investmentID
    let investment = await Investment.findById(id)

    if(!investment) {
        res.render('404')
    } else {
        investment.investmentAmount = req.body.investmentAmount
    }

    await investment.save()
    res.redirect('/login')
}