//Codigo necessario para rodar a aplicação express, conectar no banco de dados e outras configurações
const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
//-------------------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
  res.render('home')
})

//aplicação rodara no localhost:3000
app.listen(3000)
