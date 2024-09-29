// Captura o clique no botão e mostra a mensagem
document.getElementById('clickButton').addEventListener('click', function() {
    document.getElementById('message').textContent = 'Botão Clicado!';
});

// Muda a cor de fundo da div quando o mouse passa por cima
const colorBox = document.getElementById('colorBox');
colorBox.addEventListener('mouseover', function() {
    colorBox.style.backgroundColor = 'red';
});
colorBox.addEventListener('mouseout', function() {
    colorBox.style.backgroundColor = '#ccc';
});

// Contador de cliques
let count = 0;
document.getElementById('counterButton').addEventListener('click', function() {
    count++;
    document.getElementById('clickCount').textContent = count;
});

// Alterna entre mostrar e esconder o texto
document.getElementById('toggleButton').addEventListener('click', function() {
    const toggleText = document.getElementById('toggleText');
    if (toggleText.style.display === 'none') {
        toggleText.style.display = 'block';
    } else {
        toggleText.style.display = 'none';
    }
});

// Detecta tecla pressionada
document.getElementById('keyInput').addEventListener('keydown', function(event) {
    alert('Tecla pressionada: ' + event.key);
});
