const { categoryServices } = require('../services');

const addCategory = async (req, res) => {
    const { name } = req.body;

    const { type, result } = await categoryServices.addCategory(name);

    return res.status(type).json(result);
};

const getAllCategories = async (_req, res) => {
    const { type, result } = await categoryServices.getAllCategories();

    res.status(type).json(result);
};

module.exports = { addCategory, getAllCategories };