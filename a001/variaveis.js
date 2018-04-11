// tipos de dados
var x;  //x está undefined
x = 1;  //x está definido agora com valor inteiro
x = 0;  //x com valor alterado
x = 1.4;    //x agora tem outro valor e do tipo decimal (real) (float)

x = 'hellow javascript';    //x recebe um valor do tipo: string
x = "javascript hellow";    //x com valor tipo: string

x = true;   //x agora é do tipo: boolean

x = null;   //x agora não tem nenhum valor

x = undefined;  //x agora está com ausência de valor

x = {}; //x agora recebe um tipo: objeto
//objetos possuem propriedades e métodos

x = {linguagem: "javascript", data: "06/04/2018"};
//definição do objeto com propriedades

//notação de objeto
x.linguagem;    //acessa o valor de da propriedade
x.data;         //acessando o valor do objeto x

//notação de array
x['linguagem']; //acessa o valor da propriedade

x.linguagem = "js"; //alterando o valor

var n = [];   //criando um array

n = [1,3,5,7,9];  //atribuindo valores

n[0];   //retorna o primeiro valor: 1
n[1];   //retorna o segundo valor
n[5];   //ERRO. esse índice não está definido

