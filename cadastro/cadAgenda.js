const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true,
        serverSelectionTimeoutMS : 20000
    }
);

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function(){
    console.log("estamos conectados")
})

const CalenSchema = new mongoose.Schema({
    email : String,
    nome : String,
    idade : Number,
    numero : Number,
})


const Contatos = mongoose.model("Contatos", CalenSchema)

const carla = new  Contatos({
    email : "Carla@gmail.com",
    nome : "Carla Silva",
    idade : 17,
    numero : '1194556237'
});

carla.save();

const epaminondas = new  Contatos({
    email : "epa@gmail.com",
    nome : "epaminondas",
    idade : 18,
    numero : '1195662484'
});

epaminondas.save();