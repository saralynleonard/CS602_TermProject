const express = require('express')
const router = express.Router()

const missionDetails = require("./missionDetails")
const displayMissions = require("./displayMissions")
const displayAdmin = require("./adminView")
const addMission = require("./addMission")
const saveMission = require("./saveMission")
const editMission = require("./editMission")
const saveAfterEditMission = require("./saveAfterEditMission")
const deleteMission = require('./deleteMission')
const deleteMissionAfterConfirm = require('./deleteMissionAfterConfirm')
const home = require('./home')
const accountLogin = require('./account')
const login = require('./login')
const adminMissionDetails = require('./adminMissionDetails')
const investForm = require('./invest')
const logout = require('./logout')
const userDetailsForAdmin = require('./displayUserAdmin')
const saveInvestment = require('./saveInvestment')
const editInvestment = require('./editInvestment')
const saveAfterEditInvestment = require('./saveAfterEditInvestment')
const deleteInvestment = require('./deleteInvestment')
const deleteAfterConfirmInvestment = require('./deleteInvestmentAfterConfirm')
const missionLookup = require('./missionLookup')

const missionLookupREST = require('./missionLookupREST')
const allMissionsREST = require('./missionsREST')

//setup the initial route
router.get('/', home)

//setup the GET routes
router.get('/mission/:id', missionDetails)
router.get('/missions', displayMissions)
router.get('/admin', displayAdmin)
router.get('/new/mission', addMission)
router.get('/mission/edit/:id', editMission)
router.get('/mission/delete/:id', deleteMission)
router.get('/login', accountLogin)
router.get('/account/logout', logout)
router.get('/account', login)
router.get('/admin/mission/:id', adminMissionDetails)
router.get('/invest/:id', investForm) 
router.get('/user/:id', userDetailsForAdmin)
router.get('/investment/edit/:id', editInvestment) 
router.get('/investment/delete/:id', deleteInvestment)

//setup the POST routes
router.post('/mission/add', saveMission)
router.post('/mission/edit', saveAfterEditMission)
router.post('/mission/delete', deleteMissionAfterConfirm)
router.post('/invest/add', saveInvestment)
router.post('/investment/edit', saveAfterEditInvestment)
router.post('/investment/delete', deleteAfterConfirmInvestment)
router.post('/lookup/mission', missionLookup)

//REST APIs
router.get('/mission/lookup/asteroid/:name', missionLookupREST)
router.get('/missions/list', allMissionsREST)

module.exports = router