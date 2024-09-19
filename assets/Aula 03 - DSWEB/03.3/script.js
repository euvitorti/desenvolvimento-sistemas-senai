// Função que realiza operações matemáticas
function calcularOperacao(a, b, operacao) {
    switch (operacao) {
        case 'soma':
            return a + b;
        case 'subtracao':
            return a - b;
        case 'multiplicacao':
            return a * b;
        case 'divisao':
            return a / b;
        default:
            return null;
    }
}

// Função que exibe o resultado na página
function exibirResultado(operacao, resultado, a, b) {
    document.getElementById(operacao).innerText = `O resultado da ${operacao} entre ${a} e ${b} é: ${resultado}`;
}

// Função para mostrar os resultados quando o botão for clicado
function mostrarResultados() {
    let a = 30;
    let b = 4;

    exibirResultado('soma', calcularOperacao(a, b, 'soma'), a, b);
    exibirResultado('subtracao', calcularOperacao(a, b, 'subtracao'), a, b);
    exibirResultado('multiplicacao', calcularOperacao(a, b, 'multiplicacao'), a, b);
    exibirResultado('divisao', calcularOperacao(a, b, 'divisao'), a, b);
}
