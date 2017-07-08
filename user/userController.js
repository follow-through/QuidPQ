const User = require('./userModel')

const userController = {};

userController.createUser = (req, res, next) => {
  if (req.body.username && req.body.password) {
    const newUser = new User({ username: req.body.username, password: req.body.password });
    newUser.save();
    next();
  }
};

userController.verifyUser = (req, res, next) => {
  User.find({ username: req.body.username} , (err, user) => {
    if (err) res.redirect('/signup');
    if (user.password === req.body.password) next();
    res.redirect('/');
  })
};

userController.isPageUser = (req, res, next) => {
  const pageUser = req.originalUrl.slice(11);
  User.findOne({ id: req.cookies.ssid._id }, (err, user) => {
    if (err) throw new Error(err);
    if (user.userName === pageUser) res.redirect(`/mycollection/${username}`);
    next();
  })
}



module.exports = userController;