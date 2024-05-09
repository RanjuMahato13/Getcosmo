const Faq = require("../models/faqModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");

const addFaq = asyncHandler(async (req, res) => {
  try {
    const newFaq = await Faq.create(req.body);
    res.json(newFaq);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteFaq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedFaq = await Faq.findByIdAndDelete(id);
    res.json(deletedFaq);
  } catch (error) {
    throw new Error(error);
  }
});

const getFaq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const faq = await Faq.findById(id);
    res.json(faq);
  } catch (error) {
    throw new Error(error);
  }
});

const getFaqs = asyncHandler(async (req, res) => {
  try {
    const faqs = await Faq.find();
    res.json(faqs);
  } catch (error) {
    throw new Error(error);
  }
});

const updateFaq = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const updateFaq = await Faq.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(updateFaq);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  addFaq,
  deleteFaq,
  getFaq,
  getFaqs,
  updateFaq,
};
