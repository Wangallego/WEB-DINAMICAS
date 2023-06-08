function mostrarOcultar() {
    let hideText = document.getElementById('hideText');
    let hideText_btn = document.getElementById('btn_mostrar')
    if (hideText.style.display === "none") {
        hideText.style.display = "block";
        hideText_btn.innerHTML = "Mostrar menos";
    } else {
        hideText.style.display = "none";
        hideText_btn.innerHTML = "Mostrar Más";
    }
}

// Cambiar imagenes

