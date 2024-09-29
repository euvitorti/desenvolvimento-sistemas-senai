function showTime() {
    const date = new Date();
    const time = date.toLocaleTimeString();
    document.getElementById("clock").innerHTML = time;
}

// Atualiza a cada segundo
setInterval(showTime, 1000);
