const Item = require('./itemModel');

const itemController = {};

itemController.createItem = () => {
};

itemController.verifyItem = () => {
};

itemController.getUserItems = () => {
  //if user is logged in
  if(sessionController.isLoggedIn){
    //send a get request to db for user's itemSchema
    //push the items to the 
  }
}

module.exports = itemController;