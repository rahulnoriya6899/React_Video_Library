var mongoClient=require("mongodb").MongoClient;

var constring= "mongodb://127.0.0.1:27017";

mongoClient.connect(constring).then((clientObject)=>{
    var database=clientObject.db("reactdb");
    database.collection("tblcategories").find({}).toArray().then((docs)=>{
        console.log(docs);
    })
})