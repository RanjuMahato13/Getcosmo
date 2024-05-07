const Suggestion = require("../models/suggestionModel");
const asyncHandler = require("express-async-handler");

const createSuggestion = asyncHandler(async (req, res) => {
  try {
    const newSuggestion = await Suggestion.create(req.body);
    res.json(newSuggestion);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = { createSuggestion };
