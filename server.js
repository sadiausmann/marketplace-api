const express = require('express')

const logger = require('./middlewares/logger')

const usersController =require('./controllers/users_controller')


const app = express()
const port = process.env.PORT || 4002;

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)
app.use(express.json())
app.use('/api/users', usersController)


app.get('/test',(req,res) => {
    res.json('It works!')
})