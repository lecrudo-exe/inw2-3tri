const { default: mongoose } = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/livros',

{useNewUrlParser : true,

useUnifiedTopology :  true,

serverSelectionTimeoutMS : 10000});

const db=mongoose.connection;
 
db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function() {

    console.log("Estamos logado no mongodb");

});


const livrosSchema = new mongoose.Schema({
    descricao : String,
    ano : Number,
    valor : Number,
    estoque : Number,
});

const Livros = mongoose.model("Livro", livrosSchema)


const maus = new Livros({
    descricao : "maus",
    ano : 1986,
    valor : 200.00,
    estoque : 23,
});

maus.save()

