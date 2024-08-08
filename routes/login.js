const Account = require('../models/account')
const Mission = require('../models/mission')
const Investment = require('../models/investment')
const { ObjectId } = require('mongodb')


module.exports = async (req, res, next) => {
    let id = req.query.userAcct
    //check to make sure the id passed in the query string is a valid object id; if it is, find the account, if not render the 404 page
    if (ObjectId.isValid(id)) {
        let account = await Account.findById(id)
        req.session.loggedInUser = account._id
        req.session.isAdmin = account.isAdmin
        let loggedInAccount = await Account.findById(req.session.loggedInUser)

        // let investments = await Investment.find({accountID: id}).lean()
        let investments = await Investment.find({accountID: id}).lean()
        .populate('missionID', 'missionName').select('investmentAmount accountID').lean()

        let userData = {
            id: loggedInAccount._id,
            firstName: loggedInAccount.firstName,
            lastName: loggedInAccount.lastName,
            isAdmin: loggedInAccount.isAdmin
        }
        // if (account.isAdmin = true) {
        //     let missions = await Mission.find({})
        //     let results = missions.map( miss => {  
        //         return {
        //             id: miss._id,
        //             missionName: miss.missionName,
        //             launchDate: formatLongDate(miss.launchDate), 
        //             missionCost: miss.missionCost, 
        //             aboutMission: miss.aboutMission
        //         }
        //     })   
        //     res.render('adminView', {
        //         data: {
        //             userData,
        //             results
        //         }
        //     })
        // } else {
        res.render('accountView', {data: userData, investments})
    } else {
        res.render('404')
    } 
}   