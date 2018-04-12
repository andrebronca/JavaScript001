function f1( x ){
    switch(x){
        case 1:
            return 'x é 1';
            break;
        case 2:
            return 'x é 2';
            break;
        default:
            return 'x não é 1 e nem 2';
    }
}

var c = 0;

while(c < 10 ){
    console.log(c++);
}