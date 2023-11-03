let pista = 100;
let superior = 200;
let inferior = 400;

let pistaQuantidade = document.getElementById(`qtd-pista`);
pistaQuantidade.innerHTML = pista;
let superiorQuantidade = document.getElementById(`qtd-superior`);
superiorQuantidade.innerHTML = superior;
let inferiorQuantidade = document.getElementById(`qtd-inferior`);
inferiorQuantidade.innerHTML = inferior;

function comprar() {
    let tipoIngresso = document.getElementById(`tipo-ingresso`).value;
    let quantidade = document.querySelector(`input`).value;

    if (tipoIngresso == `pista` && pista > 0){
        pista = pista - quantidade;
        pistaQuantidade.innerHTML = pista;
    } else if (tipoIngresso == `superior` && superior > 0){
        superior = superior - quantidade;
        superiorQuantidade.innerHTML = superior;
    } else if (tipoIngresso == `inferior` && inferior > 0){
        inferior = inferior - quantidade;
        inferiorQuantidade.innerHTML = inferior;
    } else {
        alert(`Os ingressos para o setor ${tipoIngresso} se esgotaram`);
    }
}
