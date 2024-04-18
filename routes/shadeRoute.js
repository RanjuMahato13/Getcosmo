const express = require("express");
const { createShade, updateShade, deleteShade, getShade, getallShade } = require("../controller/shadeCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createShade);
router.put("/:id", authMiddleware, isAdmin, updateShade);
router.delete("/:id", authMiddleware, isAdmin, deleteShade);
router.get("/:id", getShade);
router.get("/", getallShade);

module.exports = router;