const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const dboprs = require('./operations');
const url = "mongodb://localhost:27017/conFusion";

MongoClient.connect(url, (err, db) =>{
    assert.equal(err,null);

    console.log("conneted correctly to server\n");
     
    dboprs.insertDocument(db, { name: "puri", description: "I love Puri"}, "dishes", (result) =>{
        console.log("Insert Document\n", result.ops);

        dboprs.findDocuments(db, "dishes", (docs) =>{
            console.log("Found documents", docs);

            dboprs.updateDocument(db, { name: "puri"}, { description: "updated puri"}, "dishes", (result) =>{
                console.log("updated document\n", result.result);

                dboprs.findDocuments(db, "dishes", (docs) =>{
                    console.log("Found updated documents", docs); 

                    db.dropCollection("dishes", (result) => {
                        console.log("Dropped collection", result);

                        db.close();
                    });
                });
            });
        });
    });

    
});
