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

const getAllUsers = async () => {
    const allUsers = await User.findAll({
        attributes: { exclude: ['password'] },
      });
    
      if (!allUsers) {
        return { 
          type: 500, 
          result: { message: 'No registered users' }, 
        };
      }
    
      return { type: 200, result: allUsers };
};

const getUserById = async (id) => {
    const user = await User.findOne({
        attributes: { exclude: ['password'] },
        where: { id },
    });

    if (!user) {
        return {
            type: 404,
            result: { message: 'User does not exist' },
        };
    }

    return { type: 200, result: user };
};

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};