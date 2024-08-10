const Asteroid = require('./models/asteroid')

module.exports = async (req, res, next) => {
    //delete asteroids
    await Asteroid.deleteMany({})

    //create asteroids
    let asteroid1 = new Asteroid({
        asteroidName: "16 Psyche", 
        designation: "16", 
        discoveryDate: '1852-03-17',
        spectralType: "M-type", 
        composition: "Mainly Iron and Nickel", 
        locationRegion: "Asteroid Belt"
    })

    let asteroid2 = new Asteroid({
        asteroidName: "511 Davida", 
        designation: "511", 
        discoveryDate: '1903-08-18', 
        spectralType: "S-type", 
        composition: "Mainly Silicate",
        locationRegion: "Asteroid Belt"
    })

    let asteroid3 = new Asteroid({
        asteroidName: "46610 Besixdouze", 
        designation: "46610", 
        discoveryDate: '1999-03-16', 
        spectralType: "C-type", 
        composition: "Carbonate compounds and Silicate"
    })

    let asteroid4 = new Asteroid({
        asteroidName: "162173 Ryugu", 
        designation: "162173", 
        discoveryDate: '1999-05-10', 
        spectralType: "C-type", 
        composition: "Silicate, Water Ice, and Organic Molecules",
        locationRegion: "Near-Earth Object (NEO)"
    })

    let asteroid5 = new Asteroid({
        asteroidName: "2012 TC4", 
        designation: "2012 TC4", 
        discoveryDate: '2012-10-04', 
        spectralType: "S-type",
        composition: "Mainly Siliacate",
        locationRegion: "Near-Earth Object (NEO)"
    })

    let asteroid6 = new Asteroid({
        asteroidName: "243 Ida", 
        designation: "243", 
        discoveryDate: '1884-09-29', 
        spectralType: "M-type", 
        composition: "Significant amounts of platinum, nickel, and iron.", 
        locationRegion: "Asteroid Belt"
    })

    await Promise.all([
        asteroid1.save(), 
        asteroid2.save(), 
        asteroid3.save(), 
        asteroid4.save(), 
        asteroid5.save(), 
        asteroid6.save()
    ])
}