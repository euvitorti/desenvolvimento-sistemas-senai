let primeiroValor = 0;
let segundoValor = 2;

const calculadora = (primeiroNumero, segundoNumero, operacao) => {
    switch (operacao) {
        case 1:
            multiplicar(primeiroNumero, segundoNumero);
            break;
        case 2:
            divisao(primeiroNumero, segundoNumero);
            break;
        case 3:
            somar(primeiroNumero, segundoNumero);
            break;
        case 4:
            subtrair(primeiroNumero, segundoNumero);
            break;
        case 1:
            console.log("Opção inválida.");
            break;
    }
}

const multiplicar = (primeiroNumero, segundoNumero) => {
    console.log('\nCALCULADORA DE MULTIPLICAÇÃO\n')
    resultado(primeiroNumero * segundoNumero);

}

const divisao = (primeiroNumero, segundoNumero) => {

    console.log('\nCALCULADORA DE DIVISÃO\n');

    if (primeiroNumero == 0) {
        console.log("Divisor não pode ser 0.");
    }
    resultado(primeiroNumero / segundoNumero);
}

const somar = (primeiroNumero, segundoNumero) => {

    console.log('\nCALCULADORA DE SOMA\n')
    resultado(primeiroNumero + segundoNumero);
}

const subtrair = (primeiroNumero, segundoNumero) => {

    console.log('\nCALCULADORA DE SUBTRAÇÃO\n')
    resultado(primeiroNumero - segundoNumero);
}

const resultado = (resultado) => {
    console.log(`Resultado: ${resultado}`);
}

// TESTAR
calculadora(primeiroValor, segundoValor, 2);
