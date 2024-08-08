const Mission = require('../models/mission')

module.exports = async (req, res, next) => {
    let id = req.params.id

    let mission = await Mission.findById(id)

    if (!mission) {
        res.render('404')
    } else {
        res.render('missionDetailsView', { 
            data: {
                id: mission._id, 
                missionName: mission.missionName,
                launchDate: formatLongDate(mission.launchDate),
                aboutMission: mission.aboutMission,
                missionCost: mission.missionCost, 
                isFeatured: mission.isFeatured
            }
        })
    }

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