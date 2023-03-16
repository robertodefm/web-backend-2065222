function calcularIMC(peso,altura){
    var imc=peso/(altura)**2
    var condicao=["abaixo do peso.","no peso normal","acima do peso","obeso"]
    if (imc < 18.5)
        console.log(condicao[0]);
    else if (imc >= 18.5 && imc < 25)
        console.log(condicao[1])
    else if (imc >= 25 && imc <= 30)
        console.log(condicao[2])
    else 
        console.log(condicao[3])
       
}

// calcularIMC(80,1.78)

// function inverteFrase(frase){
//     var nova_frase='';
//     var i=frase.length-1;
//     while (i>=0){
//         nova_frase+=frase[i];
//         i--;
        
//     }
//     console.log(nova_frase);
// }

// inverteFrase("Hoje é Domingo")

function reverseString(str){
    var splittedStr = str.split(" ");
    var reversedStr = "";
    for (let i = 0; i < splittedStr.length; i++){
        for (let j = splittedStr[i].length-1; j >= 0 ; j--){
            reversedStr += splittedStr[i][j];
        }
        reversedStr += " ";
    }
    return reversedStr;
}

// console.log(reverseString("Hoje é Domingo"));

function countVowels (str){
    var count = 0;
    for (let i = 0; i < str.length; i++){
        var c = str[i].toLowerCase();

        if (c == "a" || c == "e" || c =="i" || c =="o" || c == "u" )
            count+=1;
    }
    return count;
}

// console.log(countVowels("Hello World"));

function countLetter(str,letter){
    var count = 0;
    for (let i = 0; i < str.length; i++){
        var c = str[i].toLowerCase();
        letter=letter.toLowerCase();
        if (c==letter)
            count+=1;
    }
    return count;
};

// console.log(countLetter("Hello World","h"));

function workingTime(hoursEntry,minutesEntry,secondsEntry,hoursExit,minutesExit,secondsExit){
    var secondsTotalEntry= (hoursEntry*3600) + (minutesEntry*60) + secondsEntry;
    var secondsTotalExit= (hoursExit*3600) + (minutesExit*60) + secondsExit;
    var secondsTotal = secondsTotalExit-secondsTotalEntry;
    var hours = Math.trunc(secondsTotal/3600);
    var minutes = Math.trunc((secondsTotal%3600)/60);
    var seconds = (secondsTotal%3600)%60;
    
    console.log("Horas de trabalho: "+ hours + " Minutos de trabalho: " + minutes + " Segundos de trabalho: " + seconds);
    
};

// workingTime(8,0,0,9,32,5);


function calcular_tiempo (hora_entrada, minutos_entrada, segundos_entrada, hora_saida, minutos_saida, segundos_saida){
    var total_segundos_entrada = hora_entrada * 3600 + minutos_entrada * 60 + segundos_entrada;
    var total_segundos_saida = hora_saida * 3600 + minutos_saida * 60 + segundos_saida;
    var total = total_segundos_saida - total_segundos_entrada;

  
    var resto_horas = total % 3600;
    var horas = (total - resto_horas) / 3600;

    var resto_minutos = resto_horas % 60;
    var minutos = (resto_horas - resto_minutos) / 60;

    var segundos = resto_minutos

    console.log("O trabalhador trabalhou:" + horas + "h"+ minutos + "m" + segundos + "s")

};

function retangulo(largura,altura){
    var largura1="";

    for (var i=0;i<largura;i++){
        largura1+="*";
    }

    for (var i=0;i<altura;i++){
        console.log(largura1);
    }
};

// retangulo(10,3);

function triangulo(altura){
    var largura1="";
    for (var i=0;i<altura;i++){
        largura1+="*";
        console.log(largura1);
    }
};

// triangulo(10);

function caixa(lado){
    var lado1="";
    for (var i=0;i<lado;i++){
        lado1+="*";
    }
    console.log(lado1);
    var lado2="*";
    for (var i=0;i<lado-2;i++){
        lado2+=" ";
    }
    lado2+="*";
    for (var i=0;i<lado-2;i++){
        console.log(lado2);
    }
    console.log(lado1);
};

// caixa(10);

function caixa2(lado){
    var box = "";
    for (let i= 0; i<lado;i++){
        for (let j= 0; j<lado;j++){
            if (i==0 || i==lado-1 || j==0 || j==lado-1){
                box+="*";
            }
            else{
                box+=" ";
            }
        }
        box+="\n";
    }
    console.log(box);
};

// caixa2(10);

function notasTestes(){
    
    var student1= {name:"Pedro", grade:16};
    var student2= {name:"Ana", grade:9};
    var student3= {name:"Tiago", grade:10};
    
    var studentsList = [];
    studentsList.push(student1);
    studentsList.push(student2);
    studentsList.push(student3);
    
    var grade = studentsList[1].grade;

    return studentsList

};

var array = notasTestes()

function listar (studentsList){
    
    for (let i = 0; i < studentsList.length; i++){
        var p = studentsList[i];
        var c = p.name;
        // console.log(c + " tive uma nota de: " + p.grade);
    };
};

function melhorNota (studentsList){
    
    var melhorNota = studentsList[0];
    for (let i = 0; i < studentsList.length; i++){
        
        if (studentsList[i].grade > melhorNota){
            melhorNota = studentsList[i].grade;
            var maximo = studentsList[i];
        };
        
            
    };
    // console.log ("A maior nota foi "+ maximo.grade + " do aluno " + maximo.name + ", número de aluno: ")
};

function piorNota (studentsList){
    
    var piorNota = studentsList[0].grade;
    for (let i = 0; i < studentsList.length; i++){
        if (studentsList[i].grade < piorNota){
            piorNota = studentsList[i].grade;
            var pior = studentsList[i];
        };

    };
    console.log ("A maior nota foi "+ pior.grade + " do aluno " + pior.name + ", número de aluno: ");

};

function media (studentsList){
    var soma = 0;
    for (let i = 0; i < studentsList.length; i++){
        soma+=studentsList[i].grade;
    }
    var media = soma / studentsList.length;

    var proxima= studentsList[0].grade;
    var studentprox = studentsList[0];
    for (let i = 0; i < studentsList.length; i++){
        if ((Math.abs(studentsList[i].grade-media))<proxima){
            studentprox = studentsList[i];
            proxima=studentsList[i].grade;
        };
    };
    return [media.toFixed(2),studentprox] ;
}

// console.log("Media: " + media(array)[0] + " Aluno mais proximo da media: " + media(array)[1].name + " com " + media(array)[1].grade);

function negativas(studentsList){
    var numNegativas= 0;

    for (let i = 0; i < studentsList.length; i++){
        if (studentsList[i].grade < 10){
            numNegativas++
        };
    } ;

    return numNegativas;
}

// console.log("Há " + negativas(array) + " notas negativas")

function positivas(studentsList){
    var numPositivas= 0;

    for (let i = 0; i < studentsList.length; i++){
        if (studentsList[i].grade >= 10){
            numPositivas++
        };
    } ;

    return numPositivas;
};

console.log("Há " + positivas(array) + " notas positivas")