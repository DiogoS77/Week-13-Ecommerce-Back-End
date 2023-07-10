const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;

//This code sets up a router in an Express.js application to handle API routes. Here's a brief explanation:
//The code imports the necessary modules: express and apiRoutes.
//The router is initialized using express.Router().
//The code associates the /api path with the apiRoutes module by using router.use('/api', apiRoutes). This means that any request to /api will be handled by the routes defined in the apiRoutes module.
//If a request doesn't match any defined routes, the code uses a middleware function to send a simple HTML response with the message "Wrong Route!".
//Finally, the router is exported to be used by other parts of the application.
//In summary, this code sets up a router that handles API routes. It forwards requests with the /api path to the apiRoutes module, and any other requests will receive a "Wrong Route!" response.
