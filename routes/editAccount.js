const Account = require('../models/account')

module.exports = async (req, res, next) => {
    let id = req.params.id
    let account = await Account.findById(id)

    if (!account) {
        res.render('404')
    } else {
        res.render('editAccount', 
            {
                user: {
                    id: account._id, 
                    firstName: account.firstName,
                    lastName: account.lastName,
                    email: account.email
                }
            }
        )
    }
}