const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

//Route requeriment
const router = require('./routes/routes')

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

//Middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Routes
app.use(router)

//Static Files

//Server initiator
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})