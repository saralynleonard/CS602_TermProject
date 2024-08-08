const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const expressSession = require('express-session')
const port = process.env.PORT || 3000
const app = express()
const connectDB = require('./db')

//setup handlebars view engine and create helpers, one to determine whether the logged in user is an admin, and the other to add commas to investment amounts
app.engine('handlebars', 
    handlebars.engine({
        defaultLayout: 'main',
        helpers: {
            equals: (a, b) => a === b,
            formatNumber: function (number) {
                if (typeof number !== 'number') return number;
                return number.toLocaleString()
            }
        }
    })
)
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//initialize database connection
connectDB()

//session middleware
app.use(expressSession({
    secret: 'betelgeuse',
    resave: false, 
    saveUninitialized: false
}))

//routing
const routes = require('./routes/index')
app.use('/', routes)

app.use(function(req, res) {
    res.status(404)
    res.render('404')
})
process.on('SIGINT', () => {
    connectDB.close().then(() => {
        console.log('MongoDB connection closed.')
        process.exit(0)
    }).catch((error) => {
        console.log('Error closing MongoDB connection: ', error)
        process.exit(1)
    })
})

app.listen(3000, function(){
    console.log(`Connected on http://localhost:${port}; press Ctrl-C to terminate.`)
})
