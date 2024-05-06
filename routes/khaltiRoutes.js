const { authMiddleware } = require("../middlewares/authMiddleware");
const {
  khaltiInitiate,
  //   handleKhaltiCallback,
} = require("../controller/khaltiController");

const router = require("express").Router();

router.route("/khaltiInitate").post(authMiddleware, khaltiInitiate);
// router.route("/khaltiCallback").post(handleKhaltiCallback);

module.exports = router;
