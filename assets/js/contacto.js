//Agregamos la funcion para enviar un mensaje al mandar el form
const btnForm = document.getElementById("btnForm")

btnForm.addEventListener("click", mostrarMensaje)
function mostrarMensaje() {

     const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const mensaje = document.getElementById("mensaje")
    //Antes de mandar el formulario, se deberia 
    if(nombre.value == "" || apellido.value == "" || email.value == "" || mensaje.value == ""){
        alert("Por favor completar todos los campos para continuar")
    }

    const texto = document.getElementById("textoForm")
    texto.textContent = "Mensaje enviado, ¡Esperamos ansiosos tu vuelta!"

    const formulario = document.getElementById("formulario")
    
    formulario.reset()
}