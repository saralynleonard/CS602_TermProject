const Mission = require('../models/mission')
const Asteroid = require('../models/asteroid')

module.exports = async (req, res, next) => {
    search = req.body.asteroidName
    
    //find the asteroid entered
    let asteroid = await Asteroid.findOne({asteroidName: search})
    if (!asteroid) {
        let error = "Invalid Search Entry."
        res.render('404', {data: error})
    } else {
        let missions = await Mission.find({ targetAsteroid: asteroid._id })

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
}