document.getElementById("compararBotao").onclick = function() {
    let primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value);
    let segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    let resultadoComparacao = "";

    if (primeiroNumero > segundoNumero) {
        resultadoComparacao = `${primeiroNumero} é maior que ${segundoNumero}.`;
    } else if (primeiroNumero < segundoNumero) {
        resultadoComparacao = `${primeiroNumero} é menor que ${segundoNumero}.`;
    } else {
        resultadoComparacao = `${primeiroNumero} é igual a ${segundoNumero}.`;
    }

    document.getElementById("resultadoComparacao").innerText = resultadoComparacao;
};
