//Removeção de alunos

//Pega todos os alunos -- todas as classes e elementos filhos: "info-nome", "info-peso", etc;
var alunos = document.querySelectorAll(".aluno");

/* Não funciona :( */     
var tabela = document.querySelector("#tabela-alunos");
tabela.addEventListener("dblclikc", function(event){
    //console.log(event.target); --> seleciona a linha específica
    //event.target.remove();                   // Remove apenas o elemento "td";   
    
    //var alvoEvento = event.target;             // Retorna td 
    //var paiDoAlvo = alvoEvento.parentNode;     // Retorna tr 
    //paiDoAlvo.remove();

    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});


/* Só porque eu tinha entendido esse pedacinho de código */
/*
alunos.forEach(function(aluno){
    aluno.addEventListener("dblclick", function(){
        this.remove();
    })
});
*/