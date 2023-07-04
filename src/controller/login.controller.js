const { loginServices } = require('../services/index');

const login = async (req, res) => {
    const { email, password } = req.body;

    const { type, result } = await loginServices.login(email, password);

    return res.status(type).json(result);
};

module.exports = { login };