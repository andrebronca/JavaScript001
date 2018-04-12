var a, b = 2, c;    //junta várias expressões em uma só

function f(){
    var x = 0;
    return (x += 1, x);     //incrementa x e depois retorna x. "Acho que fica confuso"
}

function f2(){
    var a = 1, b = 2, c = 3;
    return [a, b, c];
}