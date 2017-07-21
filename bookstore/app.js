const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true })
    .then(() => console.log("Mongo Db Connected"))
    .catch(err => console.log(err));
const Books = mongoose.model("Books",{text:String});

app.get('/', (request, response) => {
    response.send("please use proper api url");
});
app.get("/admin/books",(request,response)=>{
    response.json(Books.find());
});
app.listen(3000);
console.log('Runit in 3000');