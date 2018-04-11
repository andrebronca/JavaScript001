//global
var x = 0;



//local
function soma(a, b){    //argumentos são sempre de escopo local
    var x = a + b;      //escopo local
    return x;           //escopo local. após a execução a variavel x é destruida.
}

function soma2( a, b ){
    x = a + b;          //x está no escopo global, altera o valor de x.
    return x;
}

function soma3( a , b ){
    z = a + b;              //sem usar 'var' o z passa a ser global, após rodar a função
    return z;               //evitar de criar variável sem usar: var
}