const router = require("express").Router();
const quotesRoutes = require("./quotes");

// Post routes
router.use("/quotes", quotesRoutes);


module.exports = router;