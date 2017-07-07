const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const mongoURI = 'mongodb://localhost/quidPq';
mongoose.connect(mongoURI);

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  // render homepage
});                    

app.post('/login', (req, res) => {
  // check if valid user and password
  // if :) render user's collection page
});

app.get('/signup', (req, res) => {
  // render signup page
});

app.post('/signup', (req, res) => {
  // checks if form info was :)
  // if so, make a new user document in db
});

app.get('/collection/:user', (req, res) => {
  // check if valid user - if not redirect to /
  // if valid, render user page with that users stuff from db
});

app.post('/collection/:user', (req, res) => {
  // check if valid user on own page - if not redirect to /
  // if valid, render user page with that users stuff from db
});

app.post('/messages/:user', (req, res) => {
  // check if user is a valid user
  // check if a different user is signed in
  // if both :) , add a message to db with to: and from: props
});

app.listen(3000);

module.exports = app;
