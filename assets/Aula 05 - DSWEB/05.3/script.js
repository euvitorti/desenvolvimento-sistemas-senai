// Criação do objeto pessoa
const pessoa = {
    nome: "João",
    idade: 21,
    profissao: "Desenvolvedor",

    // Método para apresentar a pessoa
    apresentar: function() {
        return `Meu nome é ${this.nome} e sou ${this.profissao}.`;
    }
};

// Imprimindo a apresentação da pessoa
console.log(pessoa.apresentar());

// Modificando a idade
// pessoa.idade = 31;

// Imprimindo a idade
console.log(`Minha idade é ${pessoa.idade}.`);
