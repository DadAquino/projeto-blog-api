const express = require('express');
const { loginController, 
  userController, categoryController, postController } = require('./controller');
const { 
  loginValidations, 
  userValidations, categoryValidation, postValidator } = require('./middlewares/validations');
const { tokenValidator } = require('./middlewares/tokenValidator');

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

app.get('/user/:id', tokenValidator, userController.findById);
app.get('/user', tokenValidator, userController.findAll);

app.post('/categories', tokenValidator, categoryValidation, categoryController.addCategory);
app.get('/categories', tokenValidator, categoryController.getAllCategories);

app.post('/post', tokenValidator, postValidator, postController.createPost);
app.get('/post', tokenValidator, postController.getPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
