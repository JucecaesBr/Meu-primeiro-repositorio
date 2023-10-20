const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model ('Produto',
{
    CodigoDeBarras: String,
    nome:String,
    preco: Number
});

// const Produto1= new Produto(
// {
//     CodigoDebarras: '777BRO',
//     nome:"Carne",
//     preco: 22.30
// })
// Produto1.save()

async function exibeProdutos(){
        console.log(await Produto.find())
}

exibeProdutos()
