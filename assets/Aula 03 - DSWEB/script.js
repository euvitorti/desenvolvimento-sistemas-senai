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
function exibirResultado(operacao, resultado) {
    document.getElementById(operacao).innerText = `O resultado da ${operacao} entre ${a} e ${b} é: ${resultado}`;
}

// Declarar e inicializar variáveis
let a = 20;
let b = 2;

// Realizar e exibir as operações
exibirResultado('soma', calcularOperacao(a, b, 'soma'));
exibirResultado('subtracao', calcularOperacao(a, b, 'subtracao'));
exibirResultado('multiplicacao', calcularOperacao(a, b, 'multiplicacao'));
exibirResultado('divisao', calcularOperacao(a, b, 'divisao'));
