// Criação do objeto carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

// Mostrando o objeto completo antes das alterações
console.log("Antes das alterações:", carro);

// Adicionando uma propriedade dinamicamente
carro.cor = "azul";

// Removendo a propriedade ano
delete carro.ano;

// Mostrando o objeto completo após as alterações
console.log("Depois das alterações:", carro);
