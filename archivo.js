 
//const btnSwitch = document.getElementById("darkmode");
//const body = document.body;

//darkmode.addEventListener("click", function () {
  //  body.classList.toggle("darkmode");
    
//})


let modo = document.getElementById("modo");
let body = document.body;

modo.addEventListener("click", function () {
  body.classList.toggle("dark")
})


/* seccion imagen*/

const mostrar = (elemento) => {
    elemento.style.display = 'block';
}
const ocultar = (elemento) => {
    elemento.style.display = 'none';
}
const mostrarOcultar = (id) => {
    let div = document.getElementById(id);
    if( window.getComputedStyle(div).display !== 'none' ){
      ocultar(div);
      return false;
    }

    mostrar(div);
}
        

