const express = require("express");
const bodyParser = require("body-parser")

const {mongoose} = require("./db/mongoose")
const User = require("./models/user")
const Item = require("./models/item")
const Message = require("./models/message")

const app = express();
const router = express.Router();
app.use(bodyParser.json());


//Routes
app.post("/user", (req, res) => {
    let user = new User ({
        userName: req.body.userName,
        password: req.body.password
    })
    user.save().then((i)=>{
        res.send(i);
    }, (e)=>{
        res.status(400);
        res.send(e);
    })
})

app.post("/item", (req, res) => {
    let item = new Item ({
        itemName: req.body.itemName,
        owner: req.body.owner
    })
    item.save().then((i)=>{
        res.send(i);
    }, (e)=>{
        res.status(400);
        res.send(e);
    })
})

app.post("/message", (req, res) => {
    console.log(req.body);
    let message = new Message ({
        messageContent: req.body.messageContent,
        owner: req.body.owner
    })
    message.save().then((i)=>{
        res.send(i);
    }, (e)=>{
        res.status(400);
        res.send(e);
    })
})

app.get("/item", (req, res) => {
    Item.find().then((items)=>{
        res.send(items);
    }, (e)=>{
        res.status(400).send(e);
    })
})


app.get("/user", (req, res) =>{
    User.find().then((users)=>{
        res.send(users);
    }, (e)=>{
        res.status(400).send(e);
    })
})


app.get("/message", (req, res) =>{
    Message.find().then((messages)=>{
        res.send(messages);
    }, (e)=>{
        res.status(400).send(e);
    })
})




app.listen(3001, () => {
    console.log("Server started on port");
})
// user1.save().then((user)=>{
//     console.log("Successfully saved", user);
// }, (e)=>{
//     return console.log("UNABLE TO SAVE");
// });




