//declaramos las variables principales
const opciones = ['Accion', 'Indie', 'Aventura'];
const contenedorOpciones = document.querySelector('.opciones');
//Guardamos el selector 
const selector = document.getElementById("selector");

opciones.forEach((opcion) => { //opcion podria ser cualquier valor, simplemente es para recorrer a opciones
    //Creamos el option
    const option = document.createElement('option');
    //Le das un value
    option.value = opcion;
    //se le da texto
    option.text = opcion;
    selector.appendChild(option);
})
//
selector.addEventListener('change', escoger);
// En esta determinamos que pasa al seleccionar una de las opciones que tenemos  
function escoger() {
    const opcionSeleccionada = selector.value
    //Limpia el contenido de la seleccion
    contenedorOpciones.innerHTML = ''

    if (opcionSeleccionada === "Accion") {
        const listaWindows = document.createElement('select');
        const opcionesWindows = [' GTV', 'Fornite', 'Metro Exodus'];
        opcionesWindows.forEach((opcion) => {
            const li = document.createElement('option');
            li.textContent = opcion;
            listaWindows.appendChild(li);
        });
        contenedorOpciones.appendChild(listaWindows);
    } else if (opcionSeleccionada === "Indie") {
        const listaMac = document.createElement('select');
        const opcionesMac = ["Stardew Valley", "Celeste", "Cuphead"]
        opcionesMac.forEach((opcion) => {
            const li = document.createElement('option');
            li.textContent = opcion;
            listaMac.appendChild(li);
        });
        contenedorOpciones.appendChild(listaMac);
    } else if (opcionSeleccionada === "Aventura") {
        const listaLinux = document.createElement('select');
        const opcionesLinux = ["Spider-man", "Monster Hunter", "It Takes Two"]

        opcionesLinux.forEach((opcion) => {
            const li = document.createElement('option')
            li.textContent = opcion;
            listaLinux.appendChild(li);

        });
        contenedorOpciones.appendChild(listaLinux);
    } 


}


