const { User } = require('../models');
const { createToken } = require('../utils/JTWGenerate');

const addUser = async (displayName, email, password, image) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email },
  });

  if (user) {
    return { 
      type: 409, 
      result: { message: 'User already registered' }, 
    };
  }

  const newUser = await User.create({ displayName, email, password, image });

  const payload = {
    id: newUser.id,
    displayName: newUser.displayName,
  };

  const token = createToken(payload);

  return { type: 201, result: { token } };
};

module.exports = {
  addUser,
};