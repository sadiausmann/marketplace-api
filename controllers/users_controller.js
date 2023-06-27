const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  User.findByEmail(email).then((existingUser) => {
    if (existingUser) {
      console.log("Email already exists");
      res.json({ message: "Email already exists" });
    } else {
      const passwordDigest = bcrypt.hashSync(password, 12);

      User.create(name, email, passwordDigest).then((newUser) =>
        res.json({ email: newUser })
      );
    }
  });
});

module.exports = router;
