const Mission = require('../models/mission')

module.exports = async (req, res, next) => {
    let mission = new Mission({
        missionName: req.body.missionName,
        launchDate: req.body.launchDate, 
        aboutMission: req.body.aboutMission,
        missionCost: req.body.missionCost, 
        isFeatured: req.body.isFeatured == "on" ? true : false
    })

    await mission.save()
    res.redirect('/admin')
}