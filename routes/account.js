const Account = require('../models/account')
const Investment = require('../models/investment')
const { ObjectId } = require('mongodb')

module.exports = async (req, res) => {
    let accounts = await Account.find({})

    if (req.session.loggedInUser === undefined) {
        let results = accounts.map( acc => {
            return {
                id: acc._id,
                firstName: acc.firstName,
                lastName: acc.lastName,
                isAdmin: acc.isAdmin 
            }
        })
        res.render('accountLoginView', 
            {data: results} 
        )
    } else { 
        let id = req.session.loggedInUser
        let loggedInAccount = await Account.findById(id)

        //use loggedInAccount id to find investments and missions associated with the logged-in user;
        let investments = await Investment.find({accountID: id}).lean()
        .populate('missionID', 'missionName').select('investmentAmount accountID').lean()

        let userData = {
            id: loggedInAccount._id,
            firstName: loggedInAccount.firstName,
            lastName: loggedInAccount.lastName,
            isAdmin: loggedInAccount.isAdmin
        }

        res.render('accountView', {data: userData, investments})
    }

}