//boton modo oscuro

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

/*COLOR*/

//let color = document.getElementById("color");
//let codColor = document.getElementById("color_p");
//let effect = document.getElementById("effect");

//effect.addEventListener('input', () => {
  //console.log(effect.options.value)
//})

//color.addEventListener('input', () => {
  //codColor.innerHTML = `${ color.value }`
  //document.body.backgroundColor = `${color,value}`
//})


/* TOP TEXT funsiona*/ 


const inputText = document.getElementById('inputText');
const renderText = document.getElementById('renderText');

inputText.addEventListener('input', (event) => {
  const textoIngresado = (event.target.value);
  renderText.innerHTML= textoIngresado
  
  
})

/* BOTTON TEXT*/

//const inputTextBotton = document.getElementById('inputTextB');
//const renderTextB = document.getElementById('renderTextB');

//inputTextBotton.addEventListener('input', (event) => {
  //const bottonText = (event.target.value);
  //renderTextB.innerHTML= bottonText
//})




