const Mission = require('../models/mission')
const { formatLongDate } = require('../public/js/formatDate')

module.exports = async (req, res, next) => {
    let missions = await Mission.find({isFeatured: true})
    let results = missions.map( miss => {
        return {
            id: miss._id,
            missionName: miss.missionName,
            launchDate: formatLongDate(miss.launchDate),
            aboutMission: miss.aboutMission
        }
    })
    res.render('home', 
        {
            data: results
        }
    ) 
}