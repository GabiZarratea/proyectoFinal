//Agregamos la funcion para enviar un mensaje despues de enviar un formulario, pero ademas tiene que cumplir con la condicion
const btnForm = document.getElementById("btnForm")
btnForm.addEventListener("click", mostrarMensaje)
function mostrarMensaje() {

     const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const mensaje = document.getElementById("mensaje")
    
    if(nombre.value == "" || apellido.value == "" || email.value == "" || mensaje.value == ""){
        alert("Por favor completar todos los campos para continuar")
        evento.preventDefault()
    }

    const texto = document.getElementById("textoForm")
    texto.textContent = "Gracias por tu comentario, ¡te esperamos la proxima!"
    texto.preventDefault()
}