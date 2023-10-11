var mongoClient= require("mongodb").MongoClient;

var constring="mongodb://localhost:27017";

mongoClient.connect(constring).then((clientObject)=>{
    var database = clientObject.db("reactdb");
    database.collection("tblcategories").updateOne({Category_Id:4},
        {$set:{CategoryName:"C-Tutorial"}}).then(()=>{
            console.log("Record Updated..")
        })
})