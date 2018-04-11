var x = 3;

var y = 7;

if (x === 3){
    y = 3;      
}

if (x === y && x === 3){
    x = 5;
    y = 2;
}

if (x === 5 || y === 1){
    x = 1;
    y = 1;
}

if (x === 2){   // avalia se é true
    y = x = 5;  // se for true executa
}

// else
if (x === 2){   //true ou false
    y = 2;      //se for true
} else {
    y = 10;     //se for false
}

if ( x === 2 ) {
    y = 2;
} else if ( y === 3 ){
    x = 3;
} else if ( x === y ){
    x = 10;
    y = x * 10;
} else {
    x = 0;
    y = 0;
}