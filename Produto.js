const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Produto = mongoose.model ('Produto',
{
    nome:String,
    codigo:Number,
    preco:Number,
    estoque:Number
});

const produtos = [
    {nome: "File", codigo: 1421, preco: 28.99, estoque:90},
    {nome: "Sabonete", codigo: 7432, preco: 8.12, estoque:400},
    {nome: "CoCa-Cola", codigo: 83411, preco: 15.00, estoque:325},
    {nome: "Arroz", codigo:3823, preco:16.50, estoque:984}
]




async function produtoCriar(){
    const tamanho = produtos.length;
    console.log(tamanho)
    for(cont=0;cont<=tamanho;cont++){
        await Produto.create(produtos[cont])
    }
}
produtoCriar()
let prod = []

const listaProduto = async () => {
    prod = await Produto.find()
    console.log(prod[0])
}



const criaInfinito = async () => {
    for(let i = 0; i<Infinity; i++){
        console.log(await Produto.create({
            nome: "Oi",
            codigo: i,
            preco: 1,
            estoque: 0
        }))
    }
}
const deletaTodosOsProdutos = async () => {
    prod = await Produto.find()
    
    for(let i = 0; i<Infinity; i++){
        console.log(await Produto.findOneAndDelete({nome: prod[i].nome}))
    }
}


async function outroProdutoCriado(produto){
    let lista=0

    let limite
    console.log("Digite o Limite")
    process.stdin.on('data', data => {
        limite = data
        process.exit();
      });
    
    while(lista<=limite-1){
        await Produto.create(produto[lista])
        lista++    
    }
}
listaProduto()




