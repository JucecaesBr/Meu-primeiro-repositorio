const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const Carro = mongoose.model ('Carro',
{
    placa:String,
    modelo:String,
    anofab:Number,
    restricao:Boolean
});

// Carro.create({
//     placa:'45hf23',
//     modelo:'BMW',
//     anofab:2019,
//     restricao:true
// });

async function exibeCarro(){
    console.log(await Carro.find())
    console.log('----------------------------------------------')

}

async function exibirCarroAno(ano){
    console.log(await Carro.findOne({anofab:ano}))
}



 async function main () {
     await exibeCarro()
     exibirCarroAno(2010)

}
// main()
async function atualizarCarro(x){
    console.log(await Carro.findOneAndUpdate(
        {placa:x},
        {restricao:false}))
}

// atualizarCarro('45hf23')

async function deletaCarro(y){
    console.log(await Carro.findOneAndDelete({placa:y}) )
}

deletaCarro('437d3ss')