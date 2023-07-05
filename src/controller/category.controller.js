const { categoryServices } = require('../services');

const addCategory = async (req, res) => {
    const { name } = req.body;

    const { type, result } = await categoryServices.addCategory(name);

    return res.status(type).json(result);
};

module.exports = { addCategory };