const db = require("../db/db");

const Comment = {
  findAll: () => {
    const sql = "SELECT * FROM comments ";

    return db.query(sql).then((dbRes) => dbRes.rows);
  },
  create: (comment, userId, productId) => {
    const sql = `
      INSERT INTO comments(comment, user_id, product_id)
      VALUES ($1, $2, $3)
      RETURNING *
    `;

    return db
      .query(sql, [comment, userId, productId])
      .then((dbRes) => dbRes.rows[0]);
  },
};

module.exports = Comment;
