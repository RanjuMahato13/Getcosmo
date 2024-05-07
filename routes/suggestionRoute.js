const express = require("express");
const { createSuggestion } = require("../controller/suggestionCtrl");
const router = express.Router();

router.post("/", createSuggestion);

module.exports = router;
