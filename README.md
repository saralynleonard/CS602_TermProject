
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

# Background
The cost of getting to orbit has been significantly reduced since the Apollo missions sent the first man to the moon, and with advancements in reusable rockets and engine efficiency, this cost will continue to decrease (Impey, 2021). With these advancements and cost reductions, there are endless possibilities for human innovation, including, but certainly not limited to, cultivation of resources found in space such as platinum, hydrogen, and oxygen left over from the formation of our solar system about 4.5 billion years ago (Zubrin, 2019).

# About CosmicQuarry
Space mining is the next step in exploring the final frontier, and CosmicQuarry is a crowdfunding application intended to connect users interested in staking asteroid and other planetary mining claims. 
 
CosmicQuarry will use user investments to help fund space mining missions. After the mission is complete, users will receive a return on their investment(s) depending on how much/what material was mined and the price the material was sold for.

# Use Case
Let’s say Lily is interested in investments and would like to expand into the space industry. Space mining is an excellent opportunity for space investments, but missions can cost millions of dollars. Lily can sign up for an account with CosmicQuarry, enter the amount she would like to invest, browse the upcoming missions, and select the mission she would like to invest in. CosmicQuarry will use her investment and the investments of other users to help fund the mining mission. After the mission is complete, Lily will receive a return on her investment depending on how much material was mined and the price the material was sold for, after CosmicQuarry takes a 3% fee.




