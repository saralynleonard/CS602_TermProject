const Mission = require('../models/mission')
const { formatShortDate } = require('../public/js/formatDate')

module.exports = async (req, res, next) => {
    let id = req.params.id

    let mission = await Mission.findById(id)

    if (!mission) {
        res.render('404')
    } else {
        console.log(mission.isFeatured);
        res.render('editMissionView', 
            {
                data: {
                    id: mission._id, 
                    missionName: mission.missionName,
                    launchDate: formatShortDate(mission.launchDate),
                    aboutMission: mission.aboutMission,
                    missionCost: mission.missionCost, 
                    isFeatured: mission.isFeatured
                }
            }
        )
    }
}