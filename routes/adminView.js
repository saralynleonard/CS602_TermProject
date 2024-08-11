const Mission = require('../models/mission')
const Account = require('../models/account')
const { formatLongDate } = require('../public/js/formatDate')

module.exports = async (req, res, next) => {
    let missions = await Mission.find({})
    if (req.session.loggedInUser === undefined) {
        //if a user is not logged in, redirect to the login page
        res.redirect('/login')
    } else {
        let loggedInAccount = await Account.findById(req.session.loggedInUser)
        let userData = {
            id: loggedInAccount._id,
            firstName: loggedInAccount.firstName,
            lastName: loggedInAccount.lastName,
            isAdmin: loggedInAccount.isAdmin
        }
        let results = missions.map( miss => {   
            return {
                id: miss._id,
                missionName: miss.missionName,
                launchDate: formatLongDate(miss.launchDate), 
                missionCost: miss.missionCost, 
                aboutMission: miss.aboutMission
            } 
        })
        let allUsers = await Account.find({})

        let users = allUsers.map(user => {
            return {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                isAdmin: user.isAdmin
            }
        })
        res.render('adminView', 
            {data: 
                userData, 
                results,
                users   
            } 
        )
    }
}

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

    // function formatLongDate(date) {
    //     const options = {
    //         weekday: 'long', 
    //         year: 'numeric', 
    //         month: 'long', 
    //         day: 'numeric'
    //     }
    //     return new Intl.DateTimeFormat('en-US', options).format(date)
    // }