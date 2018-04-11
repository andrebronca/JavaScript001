/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var n_impar = [1, 3, 5, 7, 9];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function leArrayRetornaArray( arg_array ){
    return arg_array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
leArrayRetornaArray(n_impar)[1];

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function getValorArray(arr, idx){
    if (idx > 0 && idx <= arr.length){
        return arr[ idx ];
    } else {
        return 'Índice fornecido '+ idx +' fora do tamanho: '+ arr.length;
    }
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr_dif = ['Andre',99,true,1.65,{"escolaridade": "Graduação completa"}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getValorArray(arr_dif, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome){
    var livros = {
        "javascript" : { 'quantidadePaginas' : 800, 'autor' : 'André', 'editora' : 'Press'},
        "php" : {'quantidadePaginas' : 1200, 'autor' : 'Roberto', 'editora' : 'Elsevier'},
        "web" : {'quantidadePaginas' : 500, 'autor' : 'Bronca', 'editora' : 'Alt'}
    };

    if (nome){
        if (livros[nome]){
            return livros[nome];
        } else {
            return 'Não localizado';
        }
    } else {
        return livros;
    }
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var livro = 'php';
'O livro '+ livro +' tem '+ book(livro).quantidadePaginas +' páginas!';

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
'O autor do livro '+ livro +' é '+ book(livro).autor +'.';

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
'O livro '+ livro +' foi publicado pela editora '+ book(livro).editora +'.';