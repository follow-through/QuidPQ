const {MongoClient, ObjectID} = require("mongodb");
MongoClient.connect("mongodb://quidpq:quidpq@ds147842.mlab.com:47842/quidpq", (err, db)=>{
    if (err){
       return console.log("UNABLE TO CONNECT TO MongoDB SERVER");
    }
    console.log("Connected to MongoDB server")

    //find() returns a cursor
    //toArray() takes that cursor and returns a promise which can then be resolved with your search results

    //_id is stored as an ObjectID so you cannot query _id with just a string value. Have to use ObjectID constructor
    //.find({_id: new ObjectID})

    // console.log(db.collection("Users").find({_id: new ObjectID("595fdd7433f6135011c67860")}).toArray().then((docs)=>{
    //     console.log(JSON.stringify(docs, undefined, 2));
    //     db.close();
    // }, (err) =>{
    //     console.log("UNABLE TO FETCH DOCS", err)
    // }));

    //deleteMany, deleteOne, findOneAndDelete

    db.collection("Users").findOneAndUpdate({
        _id: new ObjectID("596034164432566357e16896")
    }, {
        $inc: {
            age: 3
        }
    }, {
        returnOriginal: false
    },
    (err, result) =>{
        if (err){
            return console.log("Could not add", err);
        }
        console.log(JSON.stringify(result));
    })
});