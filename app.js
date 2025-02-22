// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar
// la lógica para resolver el problema.

// Declaración de un array para almacenar los nombres de los amigos.
let amigos = [];

// Función para agregar un nombre a la lista de amigos.
function agregarAmigo() {
    // Obtener el elemento de entrada donde se escribe el nombre.
    const input = document.getElementById('amigo');
    // Limpiar el valor de entrada (eliminar espacios al inicio y al final).
    const nombre = input.value.trim();

    // Validar que el nombre no esté vacío.
    if (nombre === "") {
        alert("Por favor, inserte un nombre"); // Mensaje de alerta si el nombre está vacío.
        return; // Salir de la función si no hay nombre.
    }

    // Agregar el nombre al array de amigos.
    amigos.push(nombre);
    // Limpiar el campo de entrada para el siguiente nombre.
    input.value = "";
    // Mostrar la lista actualizada de amigos.
    mostrarlistaAmigos();  
}

// Función para mostrar la lista de amigos en el HTML.
function mostrarlistaAmigos() {
    // Obtener el elemento de la lista en el HTML.
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente.
    lista.innerHTML = "";

    // Recorrer el array de amigos y agregar cada uno a la lista.
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista (<li>).
        const li = document.createElement('li');
        // Establecer el texto del elemento de lista como el nombre del amigo.
        li.textContent = amigos[i];
        // Añadir el nuevo elemento de lista al final de la lista en el HTML.
        lista.appendChild(li);
    }
}

// Función para sortear un amigo al azar.
function sortearAmigo() {
    // Verificar si hay amigos en la lista.
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear."); // Mensaje si la lista está vacía.
        return; // Salir de la función si no hay amigos.
    }
    // Generar un índice aleatorio basado en la longitud del array de amigos.
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener el amigo secreto usando el índice aleatorio.
    const amigoSecreto = amigos[indiceAleatorio];
    // Mostrar el amigo secreto en el elemento correspondiente del HTML.
    document.getElementById('resultado').textContent = amigoSecreto; 
}






