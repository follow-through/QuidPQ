const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const userController = require('./../user/userController');
const itemController = require('./../item/itemController');
const messageController = require('./../message/messageController');
const sessionController = require('./../session/sessionController');
const cookieController = require('./../util/cookieController');

const app = express();

const mongoURI = 'mongodb://localhost/quidPq';
mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  // render homepage
});                    

app.post('/login', userController.verifyUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.redirect('/')
});

app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, './../public/sign-up.html'))
});

app.post('/signup', userController.createUser, cookieController.setSSIDCookie, sessionController.startSession, (req, res) => {
  res.redirect('/' + res.body.username);
});

app.get('/collection/:user', userController.isLoggedIn, itemController.getUserItems, messageController.getMessages, userController.isPageUser, (req, res) => {

});

app.get('/mycollection/:user', (req, res) => {

});

app.post('/mycollection/:user', itemController.addNewItem, (req, res) => {
  // check if valid user on own page - if not redirect to /
  // if valid, render user page with that users stuff from db
});

app.post('/messages/:user', messageController.addMessages, (req, res) => {
  // check if user is a valid user
  // check if a different user is signed in
  // if both :) , add a message to db with to: and from: props
});

app.listen(3000);

module.exports = app;
