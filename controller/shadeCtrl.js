const Shade = require("../models/shadeModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");

const createShade = asyncHandler(async (req, res) => {
    try {
        const newShade = await Shade.create(req.body);
        res.json(newShade);
    } catch (error) {
        throw new Error(error);
    }
});
const updateShade = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateShade = await Shade.findByIdAndUpdate(id, req.body, {
            new: true,
        });
        res.json(updateShade);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteShade = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const deletedShade = await Shade.findByIdAndDelete(id);
        res.json(deletedShade);
    } catch (error) {
        throw new Error(error);
    }
});
const getShade = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaShade = await Shade.findById(id);
        res.json(getaShade);
    } catch (error) {
        throw new Error(error);
    }
});
const getallShade = asyncHandler(async (req, res) => {
    try {
        const getallShade = await Shade.find();
        res.json(getallShade);
    } catch (error) {
        throw new Error(error);
    }
});
module.exports = { createShade, updateShade, deleteShade, getShade, getallShade,  };