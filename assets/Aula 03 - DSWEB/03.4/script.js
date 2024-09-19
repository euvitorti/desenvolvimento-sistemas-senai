// Mostra o campo de nome do pet caso o usuário tenha um animal de estimação
document.getElementById("temPet").addEventListener("change", function() {
    const petInput = document.getElementById("nomePet");
    if (this.value === "sim") {
        petInput.style.display = "block";
        petInput.required = true;
    } else {
        petInput.style.display = "none";
        petInput.required = false;
        petInput.value = ""; // Limpa o valor quando não é necessário
    }
});

// Coleta as informações e exibe o resultado
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário para o servidor

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let time = document.getElementById("time").value;
    let cidade = document.getElementById("cidade").value;
    let corFavorita = document.getElementById("corFavorita").value;
    let hobby = document.getElementById("hobby").value;
    let ocupacao = document.getElementById("ocupacao").value;
    let temPet = document.getElementById("temPet").value === "sim";
    let nomePet = document.getElementById("nomePet").value;

    let resultado = `
        <h2>Suas Respostas:</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Time Favorito:</strong> ${time}</p>
        <p><strong>Localização:</strong> ${cidade}</p>
        <p><strong>Cor Favorita:</strong> ${corFavorita}</p>
        <p><strong>Hobby:</strong> ${hobby}</p>
        <p><strong>Ocupação Atual:</strong> ${ocupacao}</p>
        <p><strong>Animal de Estimação:</strong> ${temPet ? `Sim, nome: ${nomePet}` : 'Não'}</p>
    `;

    document.getElementById("resultado").innerHTML = resultado;
});
