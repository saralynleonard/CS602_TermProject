const Mission = require('../models/mission')
const Investment = require('../models/investment')
const Account = require('../models/account')
const { ObjectId } = require('mongodb')

module.exports = async (req, res, next) => {

    if (req.session.loggedInUser === undefined) {
        // let accounts = await Account.find({})
        // let results = accounts.map( acc => {
        //     return {
        //         id: acc._id,
        //         firstName: acc.firstName,
        //         lastName: acc.lastName,
        //         isAdmin: acc.isAdmin
        //     }
        // })  
        // res.render('accountLoginView', {data: results})
        res.redirect('/login')
    } else {
        let loggedInAccount = await Account.findById(req.session.loggedInUser)
        
        if (loggedInAccount.isAdmin) {

        let userData = {
            id: loggedInAccount._id,
            firstName: loggedInAccount.firstName,
            lastName: loggedInAccount.lastName,
            isAdmin: loggedInAccount.isAdmin
        }
        /*find the mission id in the url parameters; if it is a valid mission id, find the mission and render the adminMissionDetailsView; if it is not a valid mission id, render the 404 page.*/
        let id = req.params.id
        if (ObjectId.isValid(id)) {
            let mission = await Mission.findById(id)
                    // let investment = await Investment.find({missionID: id})
        // let investmentsMap = investment.map( inv => inv.investmentAmount)
        // let accountIDs = investment.map(accID => accID.accountID);
        // let account = await Account.find({_id: { $in: accountIDs } })
        // let accounts = account.map( account => ({
        //     id: account._id,
        //     firstName: account.firstName,
        //     lastName: account.lastName
        // }))

        // let investments = await Investment.find({ missionID: id }).populate('accountID').exec()

        // investments.forEach(investment => {
        //     console.log('Investment Amount:', investment.investmentAmount)
        // })
///////////////////////////////////////////////////////////////
        let investments = await Investment.find({ missionID: id}).populate('accountID', 'firstName lastName').select('investmentAmount accountID').lean()
        investments.forEach(inv => {
            formattedAmount = inv.investmentAmount.toFixed(2)
        })

        let accounts = investments.map(investment => investment.accountID) 

        let viewData = {
            mission: {
                id: mission._id,   
                missionName: mission.missionName,
                launchDate: formatDate(mission.launchDate),
                aboutMission: mission.aboutMission,
                missionCost: mission.missionCost, 
                isFeatured: mission.isFeatured,
            },
            investments,
            accounts 
            // investments: investmentsMap,
            // accounts: accounts
        }
        res.render('adminMissionDetailsView', viewData)
        } else {
        res.render('404')
    }
} else {
    let errorMsg = "You are unauthorized to view administrative details."
    res.render('404', {data: errorMsg})
}
}

    function formatDate(date) {
        const year = date.getFullYear()
        const month = padNumber(date.getMonth() +1)
        const day = padNumber(date.getDate())

        return `${year}-${month}-${day}`
    }

    function padNumber(number) {
        return number.toString().padStart(2, '0')
    }
}