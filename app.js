// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar
// la lógica para resolver el problema.

// Declaracion de Variable tipo array para almacenar los nombres.

let amigos = [];

// Funcion para agregar un nombre a la lista.

function agregarAmigo () {
    /* Declaracion de variable "input" para almacenar el id
    document.getElementById('agregarAmigo'): busca el elemento*/
    const input = document.getElementById(`amigo`);
    //almacenará el valor limpio (sin espacios) que el usuario ha ingresado.
    const nombre = input.value.trim();

    // Validar la entrada.
    if (nombre == "") {
        alert("Por favor , inserte un nombre");
        return;
    }

    // Agregar, Actualizar el array
    amigos.push(nombre);
    //Limpiar el campo.
    input.value = "";
    // Mostrar lista
    mostrarlistaAmigos();  
}

//Función para mostrar la lista.

function mostrarlistaAmigos(){
    // Muestra el nombre de los amigos
    const lista = document.getElementById(`listaAmigos`);
    //Limpiar la lista
    lista.innerHTML= "";

    //Agregar a cada amigo como un elemento

    for (let i = 0; i < amigos.length; i++){
        const li = document.createElement(`li`);
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    
}

