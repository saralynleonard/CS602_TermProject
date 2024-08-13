const Account = require('../models/account')

module.exports = async (req, res, next) => {
    let id = req.body.id
    let account = await Account.findById(id)

    if(!account) {
        res.render('404')
    } else {
        account.firstName = req.body.firstName,
        account.lastName = req.body.lastName,
        account.email = req.body.email
    }

    await account.save()
    res.redirect('/login')
}