const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;

//This code sets up a router in an Express.js application to handle different routes related to categories, products, and tags. Here's a brief explanation:
//The code imports the necessary modules: express, categoryRoutes, productRoutes, and tagRoutes.
//The router is initialized using express.Router().
//The code associates the /categories path with the categoryRoutes module by using router.use('/categories', categoryRoutes).
//This means that any request to /categories will be handled by the routes defined in the categoryRoutes module.
//Similarly, the code associates the /products path with the productRoutes module by using router.use('/products', productRoutes), and the /tags path with the tagRoutes module by using router.use('/tags', tagRoutes).
//This allows requests to /products and /tags to be handled by the corresponding route modules.
//Finally, the router is exported to be used by other parts of the application.
//In summary, this code sets up a router that acts as a central point for routing requests related to categories, products, and tags.
//It delegates the handling of specific routes to separate route modules (categoryRoutes, productRoutes, and tagRoutes) based on the provided URL paths.
