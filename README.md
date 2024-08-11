# About CosmicQuarry
CosmicQuarry is a crowdfunding application intended to connect users interested in staking asteroid and other planetary mining claims. 
CosmicQuarry will use user investments to help fund space mining missions. After the mission is complete, users will receive a return on their investment(s) depending on how much/what material was mined and the price the material was sold for.

# Application Information
* CosmicQuarry was built using Node.js and MongoDB.
* Run initDB.js to initialize the database
* View the [Home Page](http://localhost:3000/ "Home Page")
* To view the [Admin Page](http://localhost:3000/admin "Admin Page"), login as Saralyn Leonard. Other users include:
  - John Doe: Regular user; has two investments
  - Jane Smith: Regular user; has no investments
* Click Logout on the Account page to select a different user
* On the Admin page, type the name of an asteroid in the search bar to find missions targeting that asteroid. Asteroids used in this application are:
  - 16 Psyche
  - 243 Ida
  - 511 Davida 
  - 2012 TC4
  - 162173 Ryugu
  - 46610 Besixdouze
* REST APIs in XML & JSON:
  - http://localhost:3000/mission/lookup/asteroid/16+Psyche
  - http://localhost:3000/mission/lookup/asteroid/511+Davida
    - code for this is found in /routes/missionLookupREST.js
    - tested using Insomnia
  - http://localhost:3000/missions/list
    - code for this is found in /routes/missionsREST.js
    - tested using Insomnia
  - http://localhost:3000/missions/price?low=1849839000&high=2010940000
    - code for this is found in /routes/missionPriceREST.js
    - tested using Insomnia


