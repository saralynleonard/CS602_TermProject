const Mission = require('./models/mission')
const Asteroid = require('./models/asteroid')

module.exports = async (req, res, next) => {
    //delete missions
    await Mission.deleteMany({})

    //find asteroids 
    let psyche = await Asteroid.findOne({asteroidName: "16 Psyche"})
    let davida = await Asteroid.findOne({asteroidName: "511 Davida"})
    let besixdouze = await Asteroid.findOne({asteroidName: "46610 Besixdouze"})
    let ryugu = await Asteroid.findOne({asteroidName: "162173 Ryugu"})
    let tc4 = await Asteroid.findOne({asteroidName: "2012 TC4"})
    let ida = await Asteroid.findOne({asteroidName: "243 Ida"})

    //create missions
    let mission1 = new Mission({
        missionName: "CosmoRock",
        launchDate: '2036-03-01',
        aboutMission: "The CosmoRock mission is designed to explore and mine 16 Psyche, a metallic asteroid located in the asteroid belt between Mars and Jupiter. The Aurora Extractor spacecraft will be deployed to target this asteroid, which is known for its high concentrations of iron, nickel, and potentially valuable platinum group metals. The mission aims to extract and process these metals for use in future space missions and to support the development of space-based industries.",
        missionCost: 9087549000,
        targetAsteroid: psyche._id,
        isFeatured: true
    })

    let mission2 = new Mission({
        missionName: "AstroMiner",
        launchDate: '2038-07-21',
        aboutMission: "The AstroMiner mission aims to explore and mine the asteroid 162173 Ryugu, a carbonaceous near-Earth asteroid rich in organic compounds and water. The mission is designed to extract valuable resources, including water, carbon-based materials, and potentially rare minerals, to support future space exploration and in-situ resource utilization.",
        missionCost: 1910940000,
        targetAsteroid: ryugu._id,
        isFeatured: true
    })

    let mission3 = new Mission({
        missionName: "Stardust Collector",
        launchDate: '2039-08-16',
        aboutMission: "The Stardust Collector mission aims to explore and mine 511 Davida, a large asteroid located in the asteroid belt. The Titan Prospector spacecraft will be tasked with extracting valuable metallic resources from 511 Davida, which is known for its potential metal content, including iron and nickel. This mission will test new mining technologies and provide crucial data for future resource utilization in space.",
        missionCost: 1758470000,
        targetAsteroid: davida._id,
        isFeatured: true
    })

    let mission4 = new Mission({
        missionName: "Galactic Dig",
        launchDate: '2036-09-28',
        aboutMission: "The AstroHarvest mission is set to mine and analyze valuable minerals from the asteroid 46610 Bésixdouze, located in the asteroid belt between Mars and Jupiter. This mission aims to assess the feasibility of large-scale asteroid mining and extract precious resources, such as platinum-group metals and rare earth elements, to support future space exploration and resource needs on Earth.",
        missionCost: 1849839000,
        targetAsteroid: besixdouze._id,
        isFeatured: false
    })

    let mission5 = new Mission({
        missionName: "OreQuest", 
        launchDate: '2041-11-09',
        aboutMission: "To extract and analyze high-value platinum-group metals from the asteroid 16 Psyche, a large, metallic asteroid rich in precious metals.",
        missionCost: 2010940000,
        targetAsteroid: psyche._id,
        isFeatured: false
    })

    let mission6 = new Mission({
        missionName: "SpaceMine",
        launchDate: '2035-02-19',
        aboutMission: "The SpaceMine mission aims to explore and mine the asteroid 2012 TC4 to extract rare earth elements and volatile compounds, such as water ice. This mission will focus on understanding the asteroid’s structure, composition, and potential resource value, contributing to scientific knowledge and advancing space mining technologies.", 
        missionCost: 1649839000,
        targetAsteroid: tc4._id,
        isFeatured: true
    })
 
    let mission7 = new Mission({
        missionName: "Platinum Extractor", 
        launchDate: '2036-05-01',
        aboutMission: "The Platinum Pioneer mission aims to explore and mine platinum-group metals from the asteroid 243 Ida, a known platinum-rich asteroid", 
        missionCost: 1959839000,
        targetAsteroid: ida._id,
        isFeatured: false,
        isComplete: true,
        materialSold: 5195983900
    })

    let mission8 = new Mission({
        missionName: "Psyche Extractor",
        launchDate: '2035-07-21',
        aboutMission: "The Psyche Extractor mission will focus on extracting iron and nickel, and conducting a comprehensive survey of the asteroid's surface and interior. The data collected will enhance our understanding of asteroid composition and contribute to the development of future mining technologies. The mission will also serve as a key testbed for technologies that could be used in more complex and distant mining operations.",
        missionCost: 2948375000,
        targetAsteroid: psyche._id,
        isFeatured: false
    })

    await Promise.all([
        mission1.save(), 
        mission2.save(), 
        mission3.save(),
        mission4.save(),
        mission5.save(),
        mission6.save(),
        mission7.save(),
        mission8.save()
    ])
}


