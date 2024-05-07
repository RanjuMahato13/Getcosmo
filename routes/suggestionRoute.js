const express = require("express");
const {
  createSuggestion,
  deleteSuggestion,
  getSuggestion,
  getAllSuggestions,
} = require("../controller/suggestionCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router
  .route("/")
  .post(createSuggestion)
  .get(authMiddleware, isAdmin, getAllSuggestions);
router
  .route("/:id")
  .delete(authMiddleware, isAdmin, deleteSuggestion)
  .get(authMiddleware, isAdmin, getSuggestion);

module.exports = router;
