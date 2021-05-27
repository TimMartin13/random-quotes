const router = require("express").Router();
const quotesController = require("../../controllers/randomQuotesController");

// Matches with "/api/employees"
router.route("/")
  .get(quotesController.findAll)
  .post(quotesController.create);

// Matches with "/api/employees/:id"
router
  .route("/:id")
  .get(quotesController.findById)
  .put(quotesController.update)
  .delete(quotesController.remove);

module.exports = router;