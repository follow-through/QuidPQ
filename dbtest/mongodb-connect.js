const {MongoClient, ObjectID} = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/QuidPQ", (err, db)=>{
    if (err){
       return console.log("UNABLE TO CONNECT TO MongoDB SERVER");
    }
    console.log("Connected to MongoDB server")

    // db.collection("Users").insertOne({
    //     userName: 'zhuh2',
    //     password: 'codesmith123'
    // } , (err, result) =>{
    //     if (err){
    //         return console.log("Could not insert user", err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2))
    // })

    db.collection("Items").insertMany({
        itemName: "Chemistry TextBook",
        itemDescription: "Organic Chemistry, 2015 edition",
        condition: "Good"
    }, (err, result)=>{
        if (err) return console.log("Cannot Insert", err);
        console.log(JSON.stringify(result.ops, undefined, 2));
    })
    db.close();
});