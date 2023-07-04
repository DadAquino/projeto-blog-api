const express = require('express');
const { loginController, userController } = require('./controller');
const { loginValidations, userValidations } = require('./validations/validations');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// ...

app.post('/login', loginValidations, loginController.login);
app.post('/user', userValidations, userController.addNew);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
