const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

const User = require('../models/user')

router.post('/',(req,res) => {
    const {email, password } = req.body

    User
        .findByEmail(email)
        .then(user => {
            if(!user || email == '' || password == ''){
                res.status(400).json({ error: 'email and/or password are incorrect'})
            }else {
            const isValidPassword = bcrypt.compareSync(password, user.password_digest)

            if(user && isValidPassword){
                req.session.userId = user.id
                res.json({ email: user.email })  
            }
        }
    })
    
})

router.get('/',(req, res) => {
    const userId = req.session.userId
    if (userId) {
        User
            .findById(userId)
            .then(email => res.json({result: 'successful', email: email}))
            
    } else {
        res.json({})
    }
})

router.delete('/', (req, res) => {
  req.session.destroy(error => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not logout' });
    } else {
      res.json({ success: true });
    }
  });
});

module.exports = router 