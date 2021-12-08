var botaoAdicionar = document.querySelector("#adicionar-aluno");                    //"#adicionar-aluno" == seleciona o id
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();     //"preventDefault()" ??

    var form = document.querySelector("#form-adiciona");

    /* Extraindo informações de aluno */
    var aluno = obtemAlunoDoFormulario(form);                                        //Obtém informações através do objeto aluno

    /* Criação dos elementos da tabela */
    var alunoTr = montaTr(aluno);                                                    //"montarTr" == function

    var erros = validaAluno(aluno);

    if(erros.length > 0){
        exibeMensagemDeErro(erros);

        return;
    }

    //Adiciona o aluno na tabela
    var tabela = document.querySelector("#tabela-alunos");
    tabela.appendChild(alunoTr);

    //Apaga informações da tabela
    form.reset();

    var mensagemErro = document.querySelector("#mensagens-erros");
    mensagemErro.innerHTML = "";

});

//Criando tr e td de alun
/*
function montaTr(aluno){
    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = aluno.nome;
    pesoTd.textContent = peso.nome;
    alturaTd.textContent = altura.altura;
    gorduraTd.textContent = aluno.gordura;
    imcTd.textContent = aluno.imc;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(pesoTd);
    alunoTr.appendChild(alturaTd);
    alunoTr.appendChild(gorduraTd);
    alunoTr.appendChild(imcTd);
*/


function exibeMensagemDeErro(erros){
    var ul = document.querySelector("#mensagens-erros");
    ul.innerHTML = "";              //study this

    /*
    for(var i=0; i<erros.length; i++){
        var erro = erros[i];                                                      // Recebe os erros
    } */

    erros.forEach(function(erros){
        var li = document.createElement("li");
        li.textContent = erros;   //mensagens-erros
        ul.appendChild(li);                                                       // ul == nó pai
    });
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(aluno){
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("aluno");                                         //Adiciona o objeto "aluno"

    var nomeTd = montaTd(aluno.nome, "info-nome");
    var pesoTd = montaTd(aluno.peso, "info-peso");
    var alturaTd = montaTd(aluno.altura, "info-altura");
    var gorduraTd = montaTd(aluno.gordura, "info-gordura");
    var imcTd = montaTd(aluno.imc, "info-imc");

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(pesoTd);
    alunoTr.appendChild(alturaTd);
    alunoTr.appendChild(gorduraTd);

    alunoTr.appendChild(imcTd);                                                /* Adiciona "imcTd" (variável) ao colection "alunoTr" (que é um parent element) */

    return alunoTr;
}

//Função que obtem as informações do formulário -- nome, peso, altura, etc
//É possível representar esses dados (nome, peso, altura) como objetos
function obtemAlunoDoFormulario(form) {
    var aluno = {                                                                // "aluno" == objeto no JavaScript
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    /* Em vez de ter este código */
    /*
        var nome = form.nome.value;
        var peso = form.peso.valeu;
        var altura = form.altura.value;
        var gordura = form.gordura.value;
    */

    return aluno;                                                                  /* Aluno == objeto */
}


//Validação de peso e de altura
function validaAluno(aluno) {

    var erros = [];                                  //Concatenação de mensagens

    if(aluno.nome.length == 0){
        erros.push("Nome não pode ser em branco");
    }

    if(aluno.peso.length == 0){
        erros.push("O peso não pode ser em branco");
    }

    if(aluno.altura.length == 0){
        erros.push("A altura não pode ser em branco");
    }

    if(aluno.gordura.length == 0){
        erros.push("Porcentagem de gordura não pode ser em branco");
    }

    /* -------------------------------------------------------------- */

    if(!validaPeso(aluno.peso)){
        erros.push("Peso é inválido");
    }

    if (!validaAltura(aluno.altura)){
        erros.push("Altura é inválida");
    }
}
