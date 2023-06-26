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

router.delete('/:id',(req,res) => {
    const productId = req.params.id
    
    Product
        .delete(productId)
        .then(() => res.json({message: 'deleted successfully'}))
})


// Search routes:

// router.get('/search/category/:category', (req, res) => {
//     const category = req.params.category;
  
//     Product
//       .findByCategory(category)
//         .then(products => res.json(products))
//         .catch(error => {
//             console.error('Error occurred while searching products by category:', error);
//             res.status(500).json({ error: 'An error occurred while searching products by category' });
//       });
//   });


// router.get('/search/price', (req, res) => {
//   const minPrice = req.query.minPrice;
//   const maxPrice = req.query.maxPrice;

//   Product
//     .findByPriceRange(minPrice, maxPrice)
//     .then(products => res.json(products))
// });


// router.get('/search/location/:location', (req, res) => {
//   const location = req.params.location;

//   Product
//     .findByLocation(location)
//     .then(products => res.json(products))
// });


// router.get('/search/name/:name', (req, res) => {
//   const name = req.params.name;

//   Product
//     .findByName(name)
//     .then(products => res.json(products))
// });


router.get('/search/', (req, res) => {
  const productId = req.query.p; // Accessing the 'p' query parameter
  console.log(productId)
  Product
    .findSingleProduct(productId) // Use the productId in the query
    .then(data => res.json({product : data}));
});


module.exports = router;

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

