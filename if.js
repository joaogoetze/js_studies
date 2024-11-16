//IF ELSE normal

if(1>2){
    console.log("1 maior que 2");
} else {
    console.log("2 maior que 1");
}

//TRUE OU FALSE

const idade = 18;

const resultadoComTexto = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(resultadoComTexto);

const resultadoComBoolean = idade >= 18 ? true : false;
console.log(resultadoComBoolean);

//TRUE ou FALSE COM &&

const resultadoE = 1 > 0 && 1<2 ? true : false; // Se as duas condições forem verdadeiras, o resultado é true
console.log(resultadoE);


//CONDIÇÃO &&

idade >= 18 && console.log("Maior de idade!"); // Se a condição for verdadeira, executa


//CONDIÇÃO ||

const resultadoOU = idade || "Sem idade";
console.log(resultadoOU);

// Se IDADE tiver um valor FALSE ou NULL, será printado "Sem idade"
// Mas se IDADE tiver algum valor, será printada a idade

const idadeSwitch = 25;

//Switch case

switch (idadeSwitch){
    case 17:
        console.log("17 anos");
        break;
    case 18:
        console.log("18 anos");
        break;
    case 19:
        console.log("19 anos");
        break;
    default:
        console.log("Outra idade");
}