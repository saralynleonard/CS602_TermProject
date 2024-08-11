const Investment = require('../models/investment')

module.exports = async (req, res, next) => {
    id = req.body.investmentID

    let investment = await Investment.findById(id)

    //if the investment doesn't exist, render the 404 page
    if(!investment) {
        res.render('404')
    } else {
        //if it does, delete the investment and return to the loggedIn user's account page
        await investment.deleteOne({_id: id})
        res.redirect('/login')
    }

}