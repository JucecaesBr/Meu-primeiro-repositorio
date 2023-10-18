const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model ('Produto',
{
    CodigoDeBarras: String,
    nome:String,
    preco: Number
});

const Produto1= new Produto(
{
    CodigoDebarras: '912873987LC',
    nome:"arroz",
    preco: 10
})
Produto1.save().then(console.log('Produto Registrado'))