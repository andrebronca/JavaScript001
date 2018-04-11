var obj1 = {};

var pessoa = {
    nome: 'André',
    sobrenome: 'Bronca',
    sexo: 'M',
    idade: 99,
    altura: 1.99,
    peso: 99,
    andando: false,
    caminhouQuantosMetros: 0
}

pessoa.fazerAniversario = function(){
    this.idade++;
}

pessoa.andar = function(metros){
    this.caminhouQuantosMetros += metros;
    this.andando = true;
}

pessoa.parar = function(){
    this.andando = false;
}

pessoa.nomeCompleto = function(){
    return 'Olá! Meu nome é '+ this.nome +' '+ this.sobrenome +'!';
}

pessoa.mostrarIdade = function(){
    return 'Olá, eu tenho '+ this.idade +' anos!';
}

pessoa.mostrarPeso = function(){
    return 'Eu peso '+ this.peso +' kg.';
}

pessoa.mostrarAltura = function(){
    return 'Minha altura é '+ this.altura +'m.';
}

pessoa.nomeCompleto();
pessoa.mostrarIdade();
pessoa.mostrarPeso();
pessoa.mostrarAltura();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.mostrarIdade();
pessoa.andar(10);
pessoa.andar(12);
pessoa.andar(15);
pessoa.andando;
pessoa.parar();
pessoa.andando;
pessoa.caminhouQuantosMetros;

//"Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], 
//meu peso é [PESO] e, só hoje, eu já caminhei 
//[CAMINHOU QUANTOS METROS] metros!"

pessoa.apresentacao = function(){
    var artigo = this.sexo == 'M' ? 'o' : 'a';
    var ano = this.idade > 1 ? 'anos' : 'ano';
    var metro = this.caminhouQuantosMetros > 1 ? 'metros' : 'metro';

    var str = 'Olá, eu sou '+ artigo +' '+ this.nome +' '+ this.sobrenome;
    str += ', tenho '+ this.idade +' '+ ano +',';
    str += ' meu peso é '+ this.peso +' e, só hoje, eu já caminhei ';
    str += this.caminhouQuantosMetros +' '+ metro +'!';
    return str;
}