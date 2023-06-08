/* 
Validación de formularios: crea unha función que se executa ao enviar un formulario e verifica se os campos obrigatorios están completos e se os datos introducidos son válidos. Podes comprobar cousas como a lonxitude dunha cadea, o formato dun correo electrónico ou o intervalo de valores nun campo numérico. 
*/
//Interrumpir un formulario
/* 
Validación de formularios: crea unha función que se executa ao enviar un formulario e verifica se os campos obrigatorios están completos e se os datos introducidos son válidos. Podes comprobar cousas como a lonxitude dunha cadea, o formato dun correo electrónico ou o intervalo de valores nun campo numérico. 
*/
//Interrumpir un formulario
const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
})

//primero cogemos los elementos del html y expresiones regulares.
function comprobar(event) {
    let name = document.getElementById("name").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let dni = document.getElementById("dni").value;
    var expresionRegularDNI = /^[0-9]{8}[A-z]$/gm;
    var expresionRegularEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    


    function validarTelefono(telefono) {
        // Eliminamos los espacios en blanco y guiones del número de teléfono
        var numero = telefono.replace(/\s/g, '').replace(/-/g, '');

        // Verificamos si la longitud del número es igual a 9
        return numero.length === 9;
    }
    //Aqui evaluamos si lo campos estan correctos.
    if (name === "") {
        event.preventDefault();
        Swal.fire({
            title: '¡ESPERA!',
            text: 'No dejes los campos vacios!',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            customClass: {
                container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
            }
        });
    } else if (apellido === "") {
        event.preventDefault();
        Swal.fire({
            title: '¡ESPERA!',
            text: 'No dejes los campos vacios!',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            customClass: {
                container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
            }
        });
    } else if (!expresionRegularEmail.test(email)) {
        event.preventDefault();
        Swal.fire({
            title: '¡ESPERA!',
            text: 'Tienes que rellenar de manera correcta el Email.',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            customClass: {
                container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
            }
        });
    } else if (!validarTelefono(telefono)) {
        event.preventDefault();
        Swal.fire({
            title: '¡ESPERA!',
            text: 'No te olvides del telefono!',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            customClass: {
                container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
            }
        });
    } else if (!expresionRegularDNI.test(dni)) {
        event.preventDefault();
        Swal.fire({
            title: '¡ESPERA!',
            text: 'No dejes el DNI vacio!',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
            customClass: {
                container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
            }
        });
    } else {
        Swal.fire({
            title: 'ENHORABUENA',
            text: 'Te has registrado con exito!',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            customClass: {
                container: 'my-swal' // Clase CSS personalizada para el cuadro de diálogo
            }
        });
    }
    return false
}




