//valores primitivos não são objetos

var name = 'andré'; //string é um valor primitivo
name.length;    //tamanho: 5 . Js faz um wrapper para trazer o tamanho

//construtores. Definindo como objetos literalmente
var name2 = new String('André');   
var idade = new Number(99);
var ninja = new Boolean(true);

name2;
name2.valueOf();

//converte
var idade2 = Number('90');

//testar valores

typeof undefined;       // undefined
typeof function(){};    // function
typeof true;            // boolean
typeof 10;              // number
typeof 'ninja';         // string
typeof {};              // object
typeof [];              // object
typeof null;            // object
typeof NaN;             // number

function soma(x, y){
    return x + y;   //se não somar, irá concatenar
}

console.log( soma(10, 3) );
console.log( soma('A', 'B') );
console.log( soma({}, []) );

function sub(x, y){
    return x - y;   //necessáriamente subtrai
}

console.log( sub(10, 3) );
console.log( sub('A', 'B') );
console.log( sub({}, []) );

function sub(x, y){
    if(typeof x === 'number' && typeof y === 'number' ){
        return x - y;
    }

    
    return 'Um dos valores ou os dois não são números!';
}