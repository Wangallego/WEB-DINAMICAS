/* let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText(){
    hideText.classList.toggle('show');
    
} */
function mostrarOcultar() {
    let hideText = document.getElementById('hideText');
    let hideText_btn = document.getElementById('hideText_btn'); /* debugger; */
        if (hideText.style.display ==="none" || hideText.style.display === ''){
            hideText.style.display = "block";
            hideText_btn.innerHTML = "Mostrar Menos";
        }else { 
            hideText.style.display = "none";
            hideText_btn.innerHTML = "Mostrar Más";
        }
}

function desplegar(){
   let desplegable = document.getElementById("desplegable");
   if( desplegable.style.display === "none"||desplegable.style.display === ''){
        desplegable.style.display = "block";
   }else {
    desplegable.style.display = "none"
   }

}


function opciones(){
    let accion = document.getElementById("accion");
    let accionStyle = window.getComputedStyle(accion);

    if (accionStyle.style.display === "none"|| accion.style.display === '' ){
        accion.style.display = "block";
    }else {
        accionStyle.style.display = "none";
    }
}



//mostrar opciones de manera dinamica, con selects y options