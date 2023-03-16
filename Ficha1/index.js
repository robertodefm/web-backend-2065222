function calculateGrade(gp, gt){
    var grade = gp*0.6 + gt * 0.4;
    if (grade > 9.5)
        console.log("Aprovado");
    else
        console.log("Reprovado");
}

// calculateGrade(15,20);

function calculateGradeToF(gp, gt){
    var grade = gp*0.6 + gt * 0.4;
    if (grade > 9.5)
        return true
    else
        return false
}

// console.log(calculateGradeToF(15,20));

function nomeDoMes(num_mes){
    var mes = [null,"janeiro", "fevreiro", "março", "abril", "maio", "junho", "julho", "agosto", "septembro", "octubro", "dezembro"]
    return (mes[num_mes])
}

// console.log(nomeDoMes(9))

function calculadora(numero1,numero2,operador){
    var resultado=0;
    if (operador=="+")
        resultado=numero1+numero2;
    else if (operador=="-")
        resultado=numero1-numero2;
    else if (operador=="*")
        resultado=numero1*numero2;
    else if (operador=="/")
        resultado=numero1/numero2;
    else if (operador=="^")
        resultado=Math.pow(numero1,numero1);
    return resultado;
}

// console.log(calculadora(10,3,"^"))

function multiplos5(){
    var multiplo=0;
    while(multiplo<20){
        if (multiplo%5==0)
            console.log(multiplo);
        multiplo++;
    }
}

// multiplos5()

function enteiros(){
    var numero=0;
    var resultado=0;
    while (numero<=100){
        resultado+=numero;
        numero++;
    }
    return resultado;
}

// console.log(enteiros())

function fatorial(numero){
    var copia_numero=numero-1;
    var resultado=numero;

    while (copia_numero>=1){
        resultado*=copia_numero;
        copia_numero--;
    }
    return resultado;
}

// console.log(fatorial(8))

function factorial(n){
    var fact = 1;
    for (let i = 2; i <= n; i++){
        fact*=i;
    }
    return fact;
}

// console.log(factorial(8))

var numeros = [2,7,3,0,1]

function maximo(array){
    var maior= 0;
    for (let i=0; i<array.length; i++){
        if (array[i]>maior)
            maior=array[i];
    }
    return maior;
}

console.log(maximo(numeros))

function minimo(array){
    var menor= array[0];
    for (let i=0; i<array.length; i++){
        if (array[i]<menor)
            menor=array[i];
    }
    return menor;
}

console.log(minimo(numeros))

function media(array){
    var media= 0;
    var soma = 0;
    for  (let i=0; i<array.length; i++){
        soma+=array[i];
    }
    media=soma/array.length;
    return media;
}

console.log(media(numeros))