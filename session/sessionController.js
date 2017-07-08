const Session = require('./sessionModel');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  if (!req.cookies.ssid) res.redirect('/signup');
  Session.findOne({ cookieId: req.cookies.ssid }, (err) => {
    if (err) res.redirect('/login');
    next();
  };
};

sessionController.startSession = (req, res, next) => {
  const newSession = new Session({ cookieId: req.cookies.ssid });
  newSession.save();
  next();
};

module.exports = sessionController;