const express = require("express");
const {
  addFaq,
  deleteFaq,
  getFaq,
  getFaqs,
  updateFaq,
} = require("../controller/faqCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").post(authMiddleware, isAdmin, addFaq).get(getFaqs);
router
  .route("/:id")
  .delete(authMiddleware, isAdmin, deleteFaq)
  .get(getFaq)
  .put(authMiddleware, isAdmin, updateFaq);

module.exports = router;
