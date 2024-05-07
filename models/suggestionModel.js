const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Suggestion", suggestionSchema);
