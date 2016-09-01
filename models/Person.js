var mongoose = require('mongoose');

//person schema
var Person = new mongoose.Schema({
    name:{
        firstName:{
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    age: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Person', Person);
