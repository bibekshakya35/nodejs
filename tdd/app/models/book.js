const mongoose = require('mongoose');
let Schema = mongoose.Schema;

//book schema definition
let BookSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        year: { type: Number, required: true },
        pages: { type: Number, required: true, min: 1 },
        createdAt: { type: Date, default: Date.now },
    },
    {
        versionKey: false
    }
);
BookSchema.pre('save', next => {
    this.createdAt = new Date();
    next();
});
module.exports = mongoose.model('book',BookSchema);