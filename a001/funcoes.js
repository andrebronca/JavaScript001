//bloco de código nomeado, acessado via uso de: ()

var x = 1;

function soma(){
    x++;
}

x;          //exibe o valor: 1

soma();     //incrementa x

x;          // 2

soma();     //incrementa x

x;          // 3

function soma2(){
    var y = 0;      //y está no escopo de: soma2()
}

y;      //não acessível, pois foi chamada fora do escopo

var y = 4;

function cinco(){
    return 5;
}

y + cinco();        // 4 + 5 = 9

function soma(x, y){
    return x + y;
}

soma(3,7);      //retorna: 10

soma();         //retorna: NaN  (not a number)

