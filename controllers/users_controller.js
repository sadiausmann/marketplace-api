const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const User = require('../models/user');

router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  const passwordDigest = bcrypt.hashSync(password, 12);

  User.create({ name, email, password: passwordDigest })
    .then(newUser => res.json({ email: newUser.email }))
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error creating user' });
    });
});

module.exports = router;