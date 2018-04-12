var func = function(){
    return 'hi';
}

func();     //hi

func.name;    //''

var f2 = function f2(){
    return 'Oi';
}

f2.name;    //f2

function person(){
    var info = {
        name: 'andré',
        lastName: 'Bronca'
    };
    return info;
}

person().name;
person().lastName;

function adder(x) {
    function addOther(y){
        return x + y;
    }
    return addOther;
}

var add2 = adder(2);    //retornou uma função
add2(3);    // 5

var car = {
    color: 'red'
};

function getCarColor(mycar) {
    return mycar.color;
}

function showOtherFunction(func){
    return func();
}

function returnedFunction(){
    return 'retornando a funcao';
}

showOtherFunction( returnedFunction )

showOtherFunction( function(){
    return 'retorno';
});



