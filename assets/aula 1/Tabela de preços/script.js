function adicionar() {

    const nomeProduto = document.querySelector("#nomeProduto").value;
    const precoProduto = document.querySelector("#precoProduto").value;
    const lista = document.querySelector("#lista");

    // Verifica se os campos estão preenchidos
    if (nomeProduto === "" || precoProduto === "") {
        alert("Por favor, preencha o nome e o preço do produto.");
        return;
    }

    // Cria uma nova linha para a tabela
    const novaLinha = document.createElement("tr");

    // Cria as células para o nome do produto e o preço
    const nomeTd = document.createElement("td");
    const precoTd = document.createElement("td");

    // Adiciona o conteúdo nas células
    nomeTd.textContent = nomeProduto;
    precoTd.textContent = `R$ ${parseFloat(precoProduto).toFixed(2)}`;

    // Insere as células na nova linha
    novaLinha.appendChild(nomeTd);
    novaLinha.appendChild(precoTd);

    // Insere a nova linha na tabela
    lista.appendChild(novaLinha);

    // Limpa os campos de entrada após adicionar o produto
    document.querySelector("#nomeProduto").value = "";
    document.querySelector("#precoProduto").value = "";

    alert("Produto adicionado com sucesso!")
}
