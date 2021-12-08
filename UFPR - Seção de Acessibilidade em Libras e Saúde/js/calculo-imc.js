//document.querySelector(.classSelector);

var titulo = document.querySelector(".titulo");                         //h1
titulo.textContent = "UFPR - SAS";

/* Função anônima 
titulo.addEventListener("click", function(){
    console.log("Olá, fui clicado pela função anônima!")
});
*/

var alunos = document.querySelectorAll(".aluno");                       //nome da variável == aluno
//console.log(alunos);                                                  //seleciona toda a tag + conteúdo

//Loop 
for (var i=0; i<alunos.length; i++){
    aluno = alunos[i];                                                  //"aluno" == HTML class tr (Table Row)

    var tdPeso = aluno.querySelector(".info-peso");                     //peso do aluno -- td (table column information) 
    /* ou -- só para acessar o conteudo */  
    var peso = tdPeso.textContent;                                      //console.log(peso) == mostra apenas o peso
    
    /* Entendi a lógica desse mini código */
    var tdAltura = aluno.querySelector(".info-altura");                 //aluno == variável atribuída   
    var altura = tdAltura.textContent;
    /* console.log(altura); */
    /***** --- ***** ---- ****/

    /* Calculando o IMC */
    var tdIMC = aluno.querySelector(".info-imc");

    pesoEhValido = validaPeso(peso);
    alturaEhValida = validaAltura(altura);


    //Validações:
    if(!pesoEhValido){
        pesoEhValido = false;    
        console.log("Peso inválido");
        tdIMC.textContent = "Peso inválido";

        //CSS 
        aluno.classList.add("aluno-invalido");
    }

    if(!alturaEhValida){
        alturaEhValida = false;
        console.log("Altura inválida");
        tdIMC.textContent = "Altura inválida";   
        
        //CSS 
        aluno.classList.add("aluno-invalido");
    }

    //Verificação
    if(pesoEhValido && alturaEhValida){
        var imc = calculaImc(peso, altura);
        //Para ser mostrado no Browser:
        tdIMC.textContent = imc;
    }
}

//Validação de peso
function validaPeso(peso){
    if (peso >= 0 && peso <= 1000){
        return true;
    }else {
        return false;
    }
}

//Validação da altura 
function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else {
        return false;
    }
}

function calculaImc(peso, altura){
    var IMC = 0;
    IMC = peso/ (altura * altura);
    return IMC.toFixed(2);
}






/*
querySelector == pega o elemento (class ou id) desejado 
É mostrado no inspect --> console
*/                                                                   


/*
"alunoPrimeiro" == parent element                                                                   
"infoPeso" == child element

similar ao conceito de herança em POO                               

console.log('aluno');
*/
