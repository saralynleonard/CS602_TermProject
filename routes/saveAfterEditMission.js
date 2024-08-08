const { json } = require('express')
const Mission = require('../models/mission')

module.exports = async (req, res, next) => {
    let id = req.body.id
    let mission = await Mission.findById(id)

    if(!mission) {
        res.render('404')
        
    } else {
        mission.missionName = req.body.missionName,
        mission.launchDate = req.body.launchDate, 
        mission.missionCost = req.body.missionCost, 
        mission.aboutMission = req.body.aboutMission, 
        mission.isFeatured = req.body.isFeatured == "on" ? true : false
    }

    await mission.save()
    res.redirect('/admin')
}