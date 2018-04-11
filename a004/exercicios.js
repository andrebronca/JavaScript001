var isTruthy = function( v ){
    return !!v;
}

isTruthy('');
isTruthy(undefined);
isTruthy('a');
isTruthy(1);

var carro = {
    marca: 'VW',
    modelo: 'G V',
    placa: 'ABC-1234',
    ano: 2011,
    cor: 'prata',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

carro.mudaCor = function(c){
    this.cor = c;
}

carro.obterCor = function(){
    return this.cor;
}

carro.obterModelo = function(){
    return this.modelo;
}

carro.obterMarca = function(){
    return this.marca;
}

carro.obterMarcaModelo = function(){
    return 'Esse carro é um '+ this.obterMarca() +' '+ this.obterModelo();
}

carro.adicionarPessoas = function( qtdPessoas ){
    var vagas = this.assentos - this.quantidadePessoas;
    var strPessoas = vagas === 1 ? ' pessoa!' : ' pessoas!';

    if (vagas === 0){
        return 'O carro já está lotado!';
    } else if (vagas > 0 && qtdPessoas <= vagas){
        this.quantidadePessoas += qtdPessoas;
        return 'Já temos '+ this.quantidadePessoas +' pessoas no carro!';
    } else if (vagas > 0  && qtdPessoas > vagas){
        return 'Só cabem mais '+ vagas + strPessoas;
    }
}

carro.obterCor();
carro.mudaCor('vermelho');
carro.obterCor();

carro.mudaCor('verde musgo');
carro.obterCor();

carro.obterMarcaModelo();

carro.adicionarPessoas(2);
carro.adicionarPessoas(4);
