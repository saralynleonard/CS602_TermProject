const Mission = require('../models/mission')
const { formatShortDate } = require('../public/js/formatDate')

//http://localhost:3000/missions/list
module.exports = async (req, res, next) => {
    res.format({
        'application/json': async () => {
            let missions = await Mission.find({})
            res.json(missions)
        },
        'application/xml': async () => {
            let missions = await Mission.find({})
            let missionsXML =
                '<?xml version="1.0"?>\n<missions>\n' + missions.map(miss => {
                    return '    <mission id="' + miss._id + '">\n<missionName>' + miss.missionName + '</missionName>\n<launchDate>' + formatShortDate(miss.launchDate) + '</launchDate>\n</mission>'
                }).join('\n') + '\n</missions>'

                res.type('application/xml')
                res.send(missionsXML)
        }
    })
}
