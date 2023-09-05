const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017',
{useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000});

const db=mongoose.connection;

db.on('error', console.error.bind(console,'conection erro'))

db.once('open', function(){
    console.log("estamos logando no mongo");

})

console.log("aaaaa casa jakare")