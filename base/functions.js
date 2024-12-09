// Função normal

function somaValor(n1, n2){
    return(n1 + n2);
}

console.log(somaValor(10, 20));

// Arrow function
//Com apenas uma expressão

const somaValores = (n1, n2) =>  n1 + n2; //Como só existe uma expressão, não é necessário return

console.log(somaValores(1, 2));

//Com apenas um parâmetro

const somaValorUmParametro = x => x * 2;

console.log(somaValorUmParametro(3));

// Sem nenhum parâmetro

const escreverMensagem = () => console.log("Mensagem");

escreverMensagem();