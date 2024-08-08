const Mission = require('../models/mission')

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

    function formatLongDate(date) {
        const options = {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        }
        return new Intl.DateTimeFormat('en-US', options).format(date)
    }
}