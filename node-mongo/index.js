const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017/conFusion";

MongoClient.connect(url, (err, db) =>{
    assert.equal(err,null);

    console.log("conneted correctly to server\n");

    const  collection = db.collection("dishes");

    collection.insertOne({"name": "Idly", "description": "Good for health"}, (err, result) => {
       assert.equal(err,null);
       console.log("After Insert\n");
       console.log(result.ops);
       
       collection.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log("found\n");
        console.log(docs);

        db.dropCollection("dishes", (err, result) =>{
            assert.equal(err, null);

            db.close();
        });
       });
    });
});
