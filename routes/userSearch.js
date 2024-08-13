const Mission = require('../models/mission')
const { formatLongDate } = require('../public/js/formatDate')

module.exports = async (req, res, next) => {
    search = req.body.missionName
    console.log(search)

    //find missions matching the mission entered by the user
    let missions = await Mission.find({missionName: search}) 
    if (!search) {
        let error = "Invalid Search Entry"
        res.render('404', {data: error})
    } else {
        let results = missions.map( miss => {
            return {
                id: miss._id, 
                missionName: miss.missionName, 
                missionCost: miss.missionCost,
                aboutMission: miss.aboutMission,
                launchDate: formatLongDate(miss.launchDate), 
                targetAsteroid: miss.targetAsteroid
            }
        })
        console.log(results)

        res.render('displayMissionsView.handlebars', {data: results})
    }
}