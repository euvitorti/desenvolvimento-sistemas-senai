function calcularIdade(anoNascimento) {
    const anoAtual = new Date().getFullYear();

    // Convertendo para número, se for string, e removendo espaços em branco
    anoNascimento = Number(anoNascimento?.toString().trim());

    // Validação de entrada
    if (isNaN(anoNascimento) || anoNascimento > anoAtual || anoNascimento < (anoAtual - 150)) {
        console.log("Por favor, insira um ano de nascimento válido entre " + (anoAtual - 150) + " e " + anoAtual + ".");
        return;
    }

    const idade = anoAtual - anoNascimento;

    // Verificando pluralidade de "ano" ou "anos"
    const anoOuAnos = idade === 1 ? "ano" : "anos";

    console.log(`Se você nasceu em ${anoNascimento}, você tem ${idade} ${anoOuAnos}.`);
}

// Testando a função com diferentes anos de nascimento
calcularIdade(2005);  // "Se você nasceu em 2005, você tem 19 anos."
calcularIdade("2003");  // "Se você nasceu em 2003, você tem 21 anos."
calcularIdade(" 2010 ");  // "Se você nasceu em 2010, você tem 14 anos."
calcularIdade(2025);  // "Por favor, insira um ano de nascimento válido..."
calcularIdade("abc");  // "Por favor, insira um ano de nascimento válido..."
calcularIdade(1850);  // "Por favor, insira um ano de nascimento válido..."
