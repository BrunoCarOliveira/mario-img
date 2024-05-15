const formulario = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const menu = document.querySelector(".header")

function cliqueiNoMenu(){
   formulario.style.left = "50%"
   formulario.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible"

   }

function cliqueiNoBotao(){
   formulario.style.left = "50%"
   formulario.style.transform = "translateX(-50%)"
   mascara.style.visibility = "visible"
}

function cliqueiNaMascara(){
formulario.style.left = "-300px"
formulario.style.transform = "translateX(0%)"
mascara.style.visibility = "hidden"
}

