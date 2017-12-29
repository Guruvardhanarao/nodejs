const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const dboprs = require('./operations');
const url = "mongodb://localhost:27017/conFusion";

MongoClient.connect(url).then( (db) =>{

    console.log("conneted correctly to server\n");
     
    dboprs.insertDocument(db, { name: "puri", description: "I love Puri"}, "dishes")
       .then( (result) =>{
        console.log("Insert Document\n", result.ops);

         return dboprs.findDocuments(db, "dishes");
       })
        .then( (docs) =>{
            console.log("Found documents", docs);

            return dboprs.updateDocument(db, { name: "puri"}, { description: "updated puri"}, "dishes")
        })
         .then((result) =>{
            console.log("updated document\n", result.result);

            return dboprs.findDocuments(db, "dishes");
         })
                
          .then((docs) =>{
                console.log("Found updated documents", docs); 

                return db.dropCollection("dishes");
          })
          .then((result) => {
                console.log("Dropped collection", result);

                db.close();
           })
           .catch((err) => console.log(err));
})
.catch((err) => console.log(err));
