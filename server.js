const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs'
}))
app.set('view engine', 'hbs')

const routes = require('./controller/burgers_controller.js')

app.use(routes)

app.listen(PORT, function () {
  console.log('Server listening on: http://localhost:' + PORT)
})