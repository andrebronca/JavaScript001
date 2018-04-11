// == igual a
// != diferente de

var x = 0;

1 == 1;     //retorna: true

1 == x;     //retorna: false

1 != x;     //retorna: true

0 != x;     //retorna: false

// === igual a, e do mesmo tipo
// !== diferente, mas do mesmo tipo

'a' == 'a'  //true

var y = 'm'

'a' == y;   //false

x = '1';

//tipagem fraca e dinâmica
1 == x;     //true. o js faz a conversão de tipo.

//testando o valor e o tipo
x === 1;        //false

'1' === 1;      //false

'1' !== 1;      //true

//operadores relacionais
1 > 1       //false

1 < 1       //false

1 >= 1      //true

1 <= 1      //true

