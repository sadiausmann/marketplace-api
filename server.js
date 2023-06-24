const express = require('express')

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const usersController =require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')


const app = express()
const port = 5000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)
app.use(express.json())
app.use(sessions)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend' });
  });