const express = require("express");
const router = express.Router();

const Comment = require("../models/comment");
const User = require("../models/user");

router.get("/", (req, res) => {
  Comment.findAll().then((comments) => res.json(comments));
});

router.post("/", (req, res) => {
  const { comment, productId } = req.body;
  const userId = req.session.userId;
  console.log(userId);

  Comment.create(comment, userId, productId).then((createdComment) =>
    res.json(createdComment)
  );
});

module.exports = router;
