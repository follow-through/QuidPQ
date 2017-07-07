const User = require('./userModel')

const userController = {};

userController.createUser = () => {
  if (req.body.username && req.body.password) {
    const newUser = new User({ username: req.body.username, password: req.body.password });
    newUser.save();
    next();
  }
};

userController.verifyUser = () => {

};



module.exports = userController;