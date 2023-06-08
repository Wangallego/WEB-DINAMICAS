
function displayTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();



    // Actualizar el contenido del reloj
    document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
}

setInterval(displayTime, 1000)