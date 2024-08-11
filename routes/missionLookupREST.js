const Mission = require('../models/mission')
const Asteroid = require('../models/asteroid')
const { formatLongDate, formatShortDate } = require('../public/js/formatDate')

module.exports = async (req, res, next) => {
    let parameter = req.params.name
    //replace '+' in the parameter with a space
    let asteroidName = parameter.replace(/\+/g, ' ')
    //find the asteroid by name
    let asteroid = await Asteroid.findOne({ asteroidName: asteroidName})
    res.format({
        //case if accept = application/json
        'application/json': async () => {
            if (asteroid === null) {
                res.send('Invalid asteroid')
            } else {
                let missions = await Mission.find({targetAsteroid: asteroid._id})
                res.json(missions)
            } 
        },
        //case if accept = application/xml
        'application/xml': async () => {
            //if no asteroid is found, return invalid asteroid
            if (asteroid === null) {
                res.send('Invalid asteroid')
            } else {
                let missions = await Mission.find({targetAsteroid: asteroid._id})
                let missionXML = 
                '<?xml version="1.0"?>\n<missions targetAsteroid="' + asteroidName + '">\n' +
                missions.map(miss => {
                    return '    <mission id="' + miss._id + '">\n' + 
                    '       <missionName>' + miss.missionName + '</missionName>\n' + 
                    '       <launchDate>' + formatShortDate(miss.launchDate) + '</launchDate>\n' + '     <missionCost>' + miss.missionCost + '</missionCost>\n</mission>'
                }).join('\n') + '\n</missions>'
    
                res.type('application/xml')
                res.send(missionXML) 
            }
        },
        //case if application = text/html
        'text/html': async () => {
            if (asteroid === null) {
                res.render('404')
            } else {
                let search = asteroidName
                let missions = await Mission.find({targetAsteroid: asteroid._id})
                let results = missions.map( miss => {
                    return {
                        id: miss._id,
                        missionName: miss.missionName,
                        missionCost: miss.missionCost,
                        aboutMission: miss.aboutMission,
                        launchDate: formatLongDate(miss.launchDate),
                        targetAsteroid: miss.targetAsteroid
                    }
                })
                let allAsteroids = await Asteroid.find({})
    
                let asteroids = allAsteroids.map(ast => {
                    return {
                        id: ast._id,
                        asteroidName: ast.asteroidName 
                    }
                })
    
                res.render('missionLookupResultsView', {data: {results, search, asteroids}})
            }
        }
    }) 
}
//http://localhost:3000/mission/lookup/asteroid/16+Psyche