var mongoClient=require ("mongodb").MongoClient;

var constring="mongodb://127.0.0.1:27017";

mongoClient.connect(constring).then((clientObject)=>{
    var database= clientObject.db('reactdb');
    var category=([{
        "Category_Id":2,
        "CategoryName":"c-programming"
    },{
        "Category_Id":4,
        "CategoryName":"Django"
    }])
    database.collection("tblcategories").insertMany(category)
    .then(()=>{
        console.log("Record Inserted...");
    })
})