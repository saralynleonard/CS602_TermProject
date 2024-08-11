const Mission = require('../models/mission')
//http://localhost:3000/missions/price?low=1849839000&high=2010940000
module.exports = async (req, res, next) => {
    let high = req.query.high
    let low = req.query.low

    let missions = await Mission.find({
        missionCost: {
            $gte: low,
            $lte: high
        }
    }).exec()
    res.format({
        'application/json': async () => {
            if (missions.length == 0) {
                res.send("No missions found.")
            } else {
                res.json(missions)
            }
        },
        'application/xml': async () => {
            if (missions.length == 0) {        
                res.send("No missions found.")
            } else {
                let missionsXML = 
                '<?xml version="1.0"?>\n<missions price-low="' + low + '" price-high="' + high + '">\n' +
                missions.map(miss => {
                    return '    <mission>\n     <missionName>' + miss.missionName + '</missionName>\n' + '      <missionCost>' + miss.missionCost + '</missionCost>\n   </mission>'
                }).join('\n') + '\n</missions>'
    
                res.type('application/xml')
                res.send(missionsXML)                
            }
        }
    })

    console.log(missions)
}