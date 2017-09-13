import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './graphql';

var app =express();

//GraphQl Server route 
app.use('/graphql',graphqlHTTP(req=>({
    schema,
    pretty:true,
    graphiql:true
})));

//connect to mongo db
mongoose.connect('mongodb://localhost:27017/graphql');

//start the server
var server = app.listen(8080,()=>{
    console.log("Listening at port"+server.address().port);
})
