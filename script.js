let producao = 50;
let sustentabilidade = 50;

function atualizarTela(){
    document.getElementById("producao").textContent = producao;
    document.getElementById("sustentabilidade").textContent = sustentabilidade;

    verificarResultado();
}

function adubar(){
    producao += 10;
    sustentabilidade += 15;
    atualizarTela();
}

function irrigacao(){
    producao += 15;
    sustentabilidade += 10;
    atualizarTela();
}

function desmatamento(){
    producao += 25;
    sustentabilidade -= 20;
    atualizarTela();
}

function energiaSolar(){
    sustentabilidade += 20;
    producao += 5;
    atualizarTela();
}

function verificarResultado(){

    let resultado = document.getElementById("resultado");

    if(producao >= 100 && sustentabilidade >= 100){
        resultado.innerHTML =
        "🏆 Parabéns! Você criou uma fazenda produtiva e sustentável!";
    }
    else if(sustentabilidade < 20){
        resultado.innerHTML =
        "⚠️ O meio ambiente está sendo prejudicado!";
    }
}