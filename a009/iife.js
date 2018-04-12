//IIFE - Immediately-invoked function expression (função auto executável)

function sum1(){
    return 1 + 0;
}
console.log( sum1() );

var s2 = function(){
    return 1 + 1;
};

console.log( s2() );

var s3 = function sum3(){
    return 1 + 2;
};

console.log( s3() );

console.log( sum3() );  //sum3() não fica disponível fora do escopo da s3

/*
Não é possível chamar ou declarar função anonima
function (){
    return 1 + 1;
}
*/

var ob = {
    prop: function(){
        return 5 + 0;
    }
};

console.log( ob );
console.log( ob. prop() );

//executando uma função anonima
//os primeiros parenteses transformam em uma expressão
//os parenteses finais, chamam a função da expressão
//cria escopo local
(
    function(){
        return 5 * 5;
    }
)();

(
    function(){
        return 5 * 5;
    }() //parenteses chamam a função
);