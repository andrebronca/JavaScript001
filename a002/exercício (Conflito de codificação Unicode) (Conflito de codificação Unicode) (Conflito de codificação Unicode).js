function addNumbers(x, y){
    return x + y;
}

var soma1 = addNumbers(3, .14) + 5;

//8.14

var v1;

function alteraV1(x){
    v1 = x;
    return 'O valor da variável v1 agora é '+ v1;
}

function validaMultiplica(a, b, c){
    var isInvalid = false;

    if ( a === undefined || b === undefined || c === undefined){
        isInvalid = true;
    }

    if (isInvalid){
        return 'Preencha todos os valores corretamente!';
    } else {
        return ( a * b * c ) + 2;
    }
}


function semNocao (a, b, c){
    //se somente 1 argumento for passado, retorne o valor desse agumento
    if (a !== undefined && (b === undefined && c === undefined)){ 
        return a; //ok
    }
    else if (b !== undefined && (a === undefined && c === undefined)){
        return b; //ok
    }
    else if (c !== undefined && (a === undefined && b === undefined)){ 
        return c; //ok
    }
    else if (a !== undefined && b != undefined && c === undefined){
        return a + b; //ok
    }
    else if (a !== undefined && c !== undefined && b === undefined){
        return a + c;   //ok
    }
    else if (b !== undefined && c !== undefined && a === undefined){
        return b + c;   //ok
    }
    else if (a !== undefined && b !== undefined && c !== undefined){
        return (a + b) / c; //ok
    }
    else if (a === undefined && b === undefined && c === undefined){
        return false;   //ok
    } else {
        return null;    
    }

}