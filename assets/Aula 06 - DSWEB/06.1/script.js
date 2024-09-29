document.getElementById('showAnswers').addEventListener('click', function () {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <h3>Respostas:</h3>
        <ol>
            <li>Eventos em JavaScript são ações ou ocorrências que acontecem no navegador. Eles são importantes porque permitem a interação do usuário com a página, como cliques, movimentações do mouse, entre outros.</li>
            <li>O evento 'click' é disparado quando um botão é clicado em uma página web.</li>
            <li>Você pode capturar o evento de clique usando o método addEventListener. Por exemplo: <code>element.addEventListener('click', function() { ... });</code></li>
            <li>O evento 'onmouseover' ocorre quando o cursor do mouse está sobre um elemento, enquanto 'onmouseout' acontece quando o cursor sai desse elemento.</li>
            <li>O método addEventListener permite que você escute e responda a eventos em um elemento sem sobrescrever manipuladores de eventos existentes.</li>
            <li>O evento 'keydown' pode ser utilizado para detectar quando uma tecla específica é pressionada no teclado.</li>
        </ol>
    `;
    responseDiv.style.display = 'block';
});
