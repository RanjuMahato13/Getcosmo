const Suggestion = require("../models/suggestionModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");

const createSuggestion = asyncHandler(async (req, res) => {
  try {
    const newSuggestion = await Suggestion.create(req.body);
    res.json(newSuggestion);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteSuggestion = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedSuggestion = await Suggestion.findByIdAndDelete(id);
    res.json(deletedSuggestion);
  } catch (error) {
    throw new Error(error);
  }
});

const getSuggestion = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const suggestion = await Suggestion.findById(id);
    res.json(suggestion);
  } catch (error) {
    throw new Error(error);
  }
});

const getAllSuggestions = asyncHandler(async (req, res) => {
  try {
    const suggestions = await Suggestion.find();
    res.json(suggestions);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createSuggestion,
  deleteSuggestion,
  getSuggestion,
  getAllSuggestions,
};
