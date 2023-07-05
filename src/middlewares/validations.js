const loginValidations = (req, res, next) => {
    const { email, password } = req.body;

    if (email === undefined 
        || password === undefined || email.length === 0 || password.length === 0) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }

    next();
}; 

const emailValidation = (email) => {
    const regex = /\S+@\S+\.\S+/;
    const emailTest = regex.test(email);

    if (email === undefined || emailTest === false) { 
        return { error: true, message: '"email" must be a valid email' };
    }

    return { error: false };
};

const userValidations = (req, res, next) => {
    const { displayName, email, password } = req.body;

    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long',
          });
    }

    const { error, message } = emailValidation(email);

    if (error === true) {
        return res.status(400).json({ message });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long',
          });
    }

    next();
};

const categoryValidation = (req, res, next) => {
    const { name } = req.body;

    if (name === undefined || name.length === 0) {
        return res.status(400).json({ message: '"name" is required' });
    }

    next();
};

module.exports = { loginValidations, userValidations, categoryValidation };