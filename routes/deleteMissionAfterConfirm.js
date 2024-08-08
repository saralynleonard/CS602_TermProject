const Mission = require('../models/mission')

module.exports = async (req, res, next) => {
    let id = req.body.id
    let mission = await Mission.findById(id)

    if(!mission) {
        res.render('404')
    } else { 
        await mission.deleteOne({_id: id})
        res.redirect('/admin') 
    }
}