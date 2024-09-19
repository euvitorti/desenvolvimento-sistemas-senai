// Função principal ao clicar no botão
document.getElementById("meuBotao").onclick = function () {
    let mensagemString = "Olá! Você clicou no botão."; // Usando string
    let numero = 42; // Usando number
    let concatenacao = `O resultado é: ${numero}`; // Concatenando string e number

    // Exibir as três mensagens em sequência
    let resultado = `${mensagemString}\nNúmero: ${numero}\n${concatenacao}`;

    // Exibir no parágrafo
    document.getElementById("mensagem").innerText = resultado;
};
