const Mission = require('./models/mission')

module.exports = async (req, res, next) => {
    //delete missions
    await Mission.deleteMany({})

    //create missions
    let mission1 = new Mission({
        missionName: "CosmoRock",
        launchDate: '2036-03-01',
        aboutMission: "The CosmoRock mission is designed to explore and mine 16 Psyche, a metallic asteroid located in the asteroid belt between Mars and Jupiter. The Aurora Extractor spacecraft will be deployed to target this asteroid, which is known for its high concentrations of iron, nickel, and potentially valuable platinum group metals. The mission aims to extract and process these metals for use in future space missions and to support the development of space-based industries.",
        missionCost: 908754900,
        isFeatured: true
    })

    let mission2 = new Mission({
        missionName: "AstroMiner",
        launchDate: '2038-07-21',
        aboutMission: "The AstroMiner mission aims to explore and mine the asteroid 162173 Ryugu, a carbonaceous near-Earth asteroid rich in organic compounds and water. The mission is designed to extract valuable resources, including water, carbon-based materials, and potentially rare minerals, to support future space exploration and in-situ resource utilization.",
        missionCost: 191094000,
        isFeatured: true
    })

    let mission3 = new Mission({
        missionName: "Stardust Collector",
        launchDate: '2039-08-16',
        aboutMission: "The Stardust Collector mission aims to explore and mine 511 Davida, a large asteroid located in the asteroid belt. The Titan Prospector spacecraft will be tasked with extracting valuable metallic resources from 511 Davida, which is known for its potential metal content, including iron and nickel. This mission will test new mining technologies and provide crucial data for future resource utilization in space.",
        missionCost: 175847000,
        isFeatured: true
    })

    await Promise.all([
        mission1.save(), 
        mission2.save(), 
        mission3.save()
    ])
}


