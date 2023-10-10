function comprar() {
    let tipoIngresso = document.querySelector(`select`).value;
    let quantidade = document.querySelector(`input`).value;
    console.log(tipoIngresso ,quantidade);

    document.querySelector(`input`).value = ``;
}