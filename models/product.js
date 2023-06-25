const db = require('../db/db')

const Product = {
    findAll: () => {
        const sql = 'SELECT * FROM products'

        return db
            .query(sql)
            .then(dbRes => dbRes.rows)
        //     .then(dbRes => {
        //     console.log(dbRes)
        //     return dbRes.rows
        // }),
    },

    create: (name, image_url, category, price, description, location, userId) => {
        const sql= `
        INSERT INTO products(name, image_url, category, price, description, location, user_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING  *
        `

        return db
            .query(sql,[name, image_url, category, price, description, location, userId])
            .then(dbRes => dbRes.rows[0])
    },

    delete: (productId) => {
        const sql = 'DELETE FROM products WHERE id = $1'

        return db.query(sql, [productId])
    }
}


module.exports = Product
