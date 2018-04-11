/* TIPOS PRIMITIVOS
number
string
boolean
null
undefined
*/

//declaração de objetos
var obj = { p1: 'texto', p2: 10, p3: true};

obj.p1;
obj.p2;

var pessoa = {
    nome: 'André',
    idade: 99,
    peso: 100,
    altura: 2.00
}

pessoa.nome;
pessoa.idade;
pessoa.peso;

var carro = {
    cor: 'prata',
    motor: '1.0',
    modelo: 'G V',
    portas: 4
}

carro.cor;
carro.motor;
carro.modelo;


var mf = function(){ return 'variavel com funcao'; }
mf();   //chamada

//propriedades
var objPessoa = {
    nome: 'André',
    idade: 99,
    altura: 1.99,
    peso: 95,
    sexo: 'M'
};

//propriedade
objPessoa.cor = 'caucasiano';

//método do objeto
objPessoa.andar = function(){
    return 'Pessoa andando';
}

//chamando o método
objPessoa.andar();      //retorna: Pessoa andando

//método do objeto
objPessoa.aniversario = function(){
    this.idade++;
}

//propriedade
objPessoa.sobrenome = 'Bronca';

//método do objeto
objPessoa.nomeCompleto = function() {
    return this.nome +' '+ this.sobrenome;
}

