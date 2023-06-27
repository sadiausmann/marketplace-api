const dotenv = reqiure('dotenv')
dotenv.config()

const express = require('express')

const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

const usersController =require('./controllers/users_controller')
const sessionsController = require('./controllers/sessions_controller')
const productsController = require('./controllers/products_controller')


const app = express()
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`listening on http://localhost:${port}`))

app.use(logger)
app.use(express.json())
app.use(sessions)
app.use('/api/products', productsController)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)

// app.get('/api/message', (req, res) => {
//     res.json({ message: 'Hello from the backend' });
//   });

if (process.env.NODE_ENV === 'production') {
    const path = require('path')
    app.use(express.static(path.join(__dirname, 'build')));
  
    app.get('/*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }