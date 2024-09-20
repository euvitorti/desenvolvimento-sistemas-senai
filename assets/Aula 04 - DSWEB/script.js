document.getElementById("compararBotao").onclick = function () {
    let primeiroNumero = parseFloat(document.getElementById("primeiroNumero").value);
    let segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
    let resultadoComparacao = "";

    resultadoComparacao =
        (primeiroNumero > segundoNumero) ? `${primeiroNumero} é maior que ${segundoNumero}.` :
            (primeiroNumero < segundoNumero) ? `${primeiroNumero} é menor que ${segundoNumero}.` :
                `${primeiroNumero} é igual a ${segundoNumero}.`;


    document.getElementById("resultadoComparacao").innerText = resultadoComparacao;
};
