//For normal

for(x=0; x<=10; x++){
   console.log(x);
}

//While
x=0;

while(x < 10)
{
    console.log(x);
    x++;
}

// Do while
y=13;

do{
    console.log(y);
    y++;
}while(y<10)

// Continue -> Se a condição é verdadeira, pula esse bloco de execução

for(z=0; z<10; z++){
    if(z == 5){
        continue;
    }
    console.log(z);
}

// Break -> Quando chega na condição, sai do for

for(d=0; d<10; d++){
    if(d == 5){
        break;
    }
    console.log(d);
}