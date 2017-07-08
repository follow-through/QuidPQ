const express = require("express");
const bodyParser = require("body-parser")

const {mongoose} = require("./db/mongoose")
const User = require("./models/user")
const Item = require("./models/item")

const app = express();

app.use(bodyParser.json());


//Routes

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




app.listen(3000, () => {
    console.log("Server started on port 3000");
})
// user1.save().then((user)=>{
//     console.log("Successfully saved", user);
// }, (e)=>{
//     return console.log("UNABLE TO SAVE");
// });




