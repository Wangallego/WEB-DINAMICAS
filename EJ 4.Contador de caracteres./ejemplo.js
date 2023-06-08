function showAlert() {
    Swal.fire({
        title: '¡ESPERA!',
        text: 'No puedes escribir mas caracteres',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
        customClass: {
            container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
        }
    });
}

//Contador de caracteres 
const campo = document.getElementById('campo');
const contadorNumero = document.getElementById('contador-numero');
const contadorMaximo = 100; // Número máximo de caracteres permitidos

campo.addEventListener('input', function () {
    const caracteres = campo.value.length;
    const caracteresRestantes = contadorMaximo - caracteres;

    contadorNumero.textContent = caracteresRestantes;
    if (caracteresRestantes < 0) {
        showAlert();
    }
});
