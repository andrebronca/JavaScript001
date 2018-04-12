function f(){
    var n1 = 1;
    var n2 = 2;
    return sum();
    function sum(){
        return n1 + n2;
    }
}

f();

function f2(){
    var n1 = 1;
    var n2 = 2;
    var sum;
    return sum();
    sum = function sum(){
        return n1 + n2;
    }
}

function f3(){
    console.log('antes de criar: ', n1);
    //console.log('antes de criar: ', n2);
    var n1 = 10;
    console.log('depois de declarar: ', n1);
}

f3();





