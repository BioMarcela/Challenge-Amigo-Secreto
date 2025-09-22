// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("campoNombre");
    let nombre = input.value;

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }

    // Validar que no esté repetido
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        input.value = "";
        return;
    }

    // Validar que solo contenga letras
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
        if (!regex.test(nombre)) {
            alert("El nombre no puede contener números ni caracteres especiales.");
            input.value = "";
            return;
}

    amigos.push(nombre); // Guardar el nombre
    mostrarLista();      // Mostrar los amigos en pantalla
    input.value = "";    // Limpiar el campo de texto
}

function mostrarLista() {
    let lista = document.getElementById("listaParticipantes");
    lista.innerHTML = ""; // Borrar lista anterior

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById("resultadoFinal");
    resultado.innerHTML = "🎉 El amigo secreto es: " + amigos[indice];
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaParticipantes").innerHTML = "";
    document.getElementById("resultadoFinal").innerHTML = "";
    document.getElementById("campoNombre").value = "";
}


