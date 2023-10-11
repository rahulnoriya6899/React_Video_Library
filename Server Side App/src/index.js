var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017")
.then((clientObj)=>{
    console.log("Hip Hip Hurre..")
})
.catch((errorObj)=>{
console.log("Not Hurray")
})