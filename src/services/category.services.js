const { Category } = require('../models');

const addCategory = async (name) => {
    const category = await Category.findOne({
        attributes: ['id', 'name'],
        where: { name },
    });

    if (category) {
        return {
            type: 409,
            result: { message: 'Category already registered' },
        };
    }

    const newCategory = await Category.create({ name });

    return { type: 201, result: newCategory };
};

module.exports = { addCategory };