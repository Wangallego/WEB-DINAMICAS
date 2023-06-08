
function cambiarImagen() {

    var img = document.getElementById("img");
    /* var btn = document.getElementById("btn"); */


    var imagenes = [
        'img/img2.jpg',
        'img/img3.jpg',
        'img/img4.jpg',
    ];
    aleatorio(imagenes);
    return imagenes ;

    function aleatorio(imagenes) {
        var indiceAleatorio = Math.floor(Math.random() * imagenes.length );
        var imagenAleatoria = imagenes[indiceAleatorio];
        img.src = imagenAleatoria;
    }
}
