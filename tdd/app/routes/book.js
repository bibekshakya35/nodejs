import mongoose from 'mongoose';
import * as Book from '../models/book';
function getBooks(req,res){
    const query = Book.find({});
    query.exec((err,books)=>{
        if(err){
            res.send(err);
        }
        res.json(books);
    });
}
module.exports