const db = require("../db/db");

const Product = {
  findAll: () => {
    const sql = "SELECT * FROM products";

    return db.query(sql).then((dbRes) => dbRes.rows);
    //     .then(dbRes => {
    //     console.log(dbRes)
    //     return dbRes.rows
    // }),
  },

  create: (name, image_url, category, price, description, location, userId) => {
    const sql = `
        INSERT INTO products(name, image_url, category, price, description, location, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING  *
        `;

    return db
      .query(sql, [
        name,
        image_url,
        category,
        price,
        description,
        location,
        userId,
      ])
      .then((dbRes) => dbRes.rows[0]);
  },

//   delete: (productId) => {
//     const sql = "DELETE FROM products WHERE id = $1";

//     return db.query(sql, [productId]);
//   },

//   findByCategory: (category) => {
//     const sql = "SELECT * FROM products WHERE category = $1";

//     return (
//       db
//         .query(sql, [category])
//         // .then(dbRes => dbRes.rows)
//         .then((dbRes) => {
//           console.log("Products found:", dbRes.rows);
//           return dbRes.rows;
//         })
//     );
//   },

//   findByPriceRange: (minPrice, maxPrice) => {
//     const sql = "SELECT * FROM products WHERE price BETWEEN $1 AND $2";

//     return db.query(sql, [minPrice, maxPrice]).then((dbRes) => dbRes.rows);
//   },

//   findByLocation: (location) => {
//     const sql = "SELECT * FROM products WHERE location = $1";

//     return db.query(sql, [location]).then((dbRes) => dbRes.rows);
//   },

//   findByName: (name) => {
//     const sql = "SELECT * FROM products WHERE name = $1";

//     return db.query(sql, [name]).then((dbRes) => dbRes.rows);
//   },
findSingleProduct: (productId) => {
    const sql = "SELECT * FROM products WHERE id = $1";

    return db.query(sql, [productId]).then((dbRes) => dbRes.rows[0]);
  }


};


module.exports = Product;
