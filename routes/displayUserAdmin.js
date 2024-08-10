const Account = require('../models/account')
const Mission = require('../models/mission')
const Investment = require('../models/investment')
const { ObjectId } = require('mongodb')

module.exports = async (req, res, next) => {
    if (req.session.loggedInUser === undefined) {
        res.redirect('/login')
    } else {
        let loggedInAccount = await Account.findById(req.session.loggedInUser)
        if (loggedInAccount.isAdmin) {
            let id = req.params.id
            
            if (ObjectId.isValid(id)) {
                let user = await Account.findById(id)
                console.log(user)
                
                let userData = {
                    id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    isAdmin: user.isAdmin
                }
                let investments = await Investment.find({accountID: user._id})

                let userInvestments = investments.map( inv => {
                    return {
                        id: inv._id,
                        investmentAmount: inv.investmentAmount,
                        investmentPercent: inv.investmentPercent,
                        missionID: inv.missionID
                    }
                })

                let loggedInAccount = req.session.loggedInUser
                let loggedInData = await Account.findById(loggedInAccount)
                let data = {
                    id: loggedInData._id,
                    isAdmin: loggedInData.isAdmin
                }
                res.render('userAdminView', 
                    {data:
                        userData,
                        userInvestments,
                        data
                    }
                )
            } else {
                res.render('404')
            }
        } else {
            let errorMsg = "You are unauthorized to view administrative details."
            res.render('404', {data: errorMsg})
        }
    }
}