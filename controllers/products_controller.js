const express = require('express')
const router = express.Router()

const Product = require('../models/product')
const User = require('../models/user');

router.get('/',(req, res) => {
    Product
        .findAll()
        .then(products => res.json(products))
})

router.post('/',(req,res) => {
    const { name, image_url, category, price, description, location } = req.body;
    const userId = req.session.userId;
    // const {email} = req.body
    // User.findByEmail(email)
    // .then(userId => res.json( {user_id : userId} ))
      
    Product
        .create(name, image_url, category, price, description, location, userId)
        .then(product => res.json(product))
})

router.delete('/:2',(req,res) => {
    const productId = req.params.id
    
    Product
        .delete(productId)
        .then(() => res.json({message: 'deleted successfully'}))
})
module.exports = router




// router.put("/:id", (req, res) => {
//   const productId = req.params.id;
//   const userId = req.session.userId;
//   const { name, image_url, category, price, description, location } = req.body;

//   if (!userId) {
//     res.status(401).json({ message: "Unauthorized" });
//     return;
//   }
//   Product.findById(productId)
//     .then((product) => {
//       if (!product) {
//         res.status(404).json({ message: "Product not found" });
//         return;
//       }

//       if (product.user_id !== userId) {
//         res.status(403).json({ message: "Forbidden" });
//         return;
//       }

//       Product.update(
//         productId,
//         name,
//         image_url,
//         category,
//         price,
//         description,
//         location
//       )
//         .then(() => res.json({ message: "Product updated successfully" }))
//         .catch((error) => {
//           console.log("Error updating product:", error);
//           res.status(500).json({ message: "Failed to update product" });
//         });
//     })
//     .catch((error) => {
//       console.log("Error finding product:", error);
//       res.status(500).json({ message: "Failed to find product" });
//     });
// });

// router.delete('/:id', (req, res) => {
//   const productId = req.params.id;
//   const userId = req.session.userId;

//   if (!userId) {
//     res.status(401).json({ message: 'Unauthorized' });
//     return;
//   }

//   Product.findById(productId)
//     .then(product => {
//       if (!product) {
//         res.status(404).json({ message: 'Product not found' });
//         return;
//       }

//       if (product.user_id !== userId) {
//         res.status(403).json({ message: 'Forbidden' });
//         return;
//       }

//       Product.delete(productId)
//         .then(() => res.json({ message: 'Product deleted successfully' }))
//         .catch(error => {
//           console.log('Error deleting product:', error);
//           res.status(500).json({ message: 'Failed to delete product' });
//         });
//     })
//     .catch(error => {
//       console.log('Error finding product:', error);
//       res.status(500).json({ message: 'Failed to find product' });
//     });
// });

