const router = require("express").Router();
const quotesRoutes = require("./Quotes");

// Post routes
router.use("/quotes", quotesRoutes);


module.exports = router;