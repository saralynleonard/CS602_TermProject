const Account = require("../models/account");
const Mission = require('../models/mission')
const { ObjectId } = require('mongodb')

module.exports = async (req, res) => {
    let id = req.params.id
    console.log(id)

    if(ObjectId.isValid(id)) {
        if(req.session.loggedInUser === undefined) {
            let accounts = await Account.find({})
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
            let mission = await Mission.findOne({_id: id})
            let account = await Account.findById(req.session.loggedInUser)
            let data = {
                userData: {
                    accountID: req.session.loggedInUser,
                    firstName: account.firstName,
                    lastName: account.lastName
                },
                missionData: {
                    missionID: mission._id,
                    missionName: mission.missionName
                }
            }
        
            res.render('investmentForm', data)
        } 
    } else {
        res.render('404')
    }
}