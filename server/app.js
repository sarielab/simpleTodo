require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.PORT || 3001
const env = process.env.NODE_ENV || 'development'
const index = require('./routes/index')
const task = require('./routes/task')
const db_config = {
  'development': 'mongodb://localhost/septSimpleTodo'
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use('/', index)
app.use('/task', task)

mongoose.connect(db_config[env], (err,res) => {
  console.log(err? err : `Connected to ${db_config[env]}`)
})

app.listen(port, (err,scs) => {console.log(err? err: `Listening on port ${port}`)})

module.exports = app