const Mission = require('../models/mission')

module.exports = async (req, res, next) => {
    let id = req.params.id

    let mission = await Mission.findById(id)

    if (!mission) {
        res.render('404')
    } else {
        res.render('deleteMissionView', 
            {
                data: {
                    id: mission._id, 
                    missionName: mission.missionName,
                    launchDate: formatDate(mission.launchDate),
                    aboutMission: mission.aboutMission,
                    missionCost: mission.missionCost
                }
            }
        )
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