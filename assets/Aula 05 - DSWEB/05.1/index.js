// Função de saudação com hora do dia
const saudacao = (nome) => {
    const hora = new Date().getHours();
    const periodo = hora < 12 ? "Bom dia" 
                  : hora < 18 ? "Boa tarde" 
                  : "Boa noite";
    
    return `${periodo}, ${nome}! Seja bem-vindo(a)!`;
};

// Função que realiza operações aritméticas
const calcular = (num1, num2) => ({
    soma: num1 + num2,
    subtracao: num1 - num2,
    multiplicacao: num1 * num2,
    divisao: num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero não é permitida."
});

// Função para classificar a idade
const classificarIdade = (idade) => 
    idade < 12 ? "Criança"
    : idade < 18 ? "Adolescente"
    : idade <= 60 ? "Adulto"
    : "Idoso";

// Função para comparar dois números e retornar o maior
const maiorNumero = (num1, num2) => 
    num1 === num2 ? "Os números são iguais." : `O maior número é ${num1 > num2 ? num1 : num2}`;

// Funções simples
const dobrar = (numero) => numero * 2;
const quadrado = (numero) => numero ** 2;
const somar = (num1, num2) => num1 + num2;

// Testando as funções
const resultadoCalculo = calcular(10, 2);

console.log(`Teste da função saudacao:
${saudacao("Vítor")}

Teste da função calcular (com 10 e 2):
Soma: 10 + 2 = ${resultadoCalculo.soma}
Subtração: 10 - 2 = ${resultadoCalculo.subtracao}
Multiplicação: 10 * 2 = ${resultadoCalculo.multiplicacao}
Divisão: 10 / 2 = ${resultadoCalculo.divisao}

Teste da função classificar idade:
Idade 25: ${classificarIdade(25)}
Idade 65: ${classificarIdade(65)}

Teste da função maior número:
Comparação entre 10 e 20: ${maiorNumero(10, 20)}
Comparação entre 10 e 10: ${maiorNumero(10, 10)}

Teste das funções simples:
Dobro de 5: ${dobrar(5)}
Quadrado de 4: ${quadrado(4)}
Soma de 8 e 3: 8 + 3 = ${somar(8, 3)}
`);
