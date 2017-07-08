const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://quidpq:quidpq@ds147842.mlab.com:47842/quidpq");

module.exports = {mongoose}