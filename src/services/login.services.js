const { User } = require('../models');
const { createToken } = require('../utils/JTWGenerate');

const login = async (email, password) => {
    const user = await User.findOne({
        attributes: ['id', 'displayName', 'email', 'image'],
        where: { email, password },
    });

    if (!user) {
        return { 
          type: 400, 
          result: { message: 'Invalid fields' }, 
        };
      }

      const payload = {
        id: user.id,
      };
    
      const token = createToken(payload);
    
      return { type: 200, data: { token } };
};

module.exports = { login };