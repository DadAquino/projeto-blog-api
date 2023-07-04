const { userServices } = require('../services');

const addNew = async (req, res) => {
    const { displayName, email, password } = req.body;

    const { type, result } = await userServices.addUser(displayName, email, password);

    return res.status(type).json(result);
};

module.exports = { addNew };