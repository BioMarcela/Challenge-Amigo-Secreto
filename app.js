// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
   let amigo = document.getElementById("amigo").value;
   if (amigo === "") {
       alert("Por favor, inserte un nombre.");
   } else {
       amigos.push(amigo);
       limpiarLista();
       limpiarInput();
       listaAmigos();
   }
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}
function limpiarLista(){
    document.getElementById("listaAmigos").innerHTML = "";
}

function listaAmigos(){
    let listado= document.getElementById("listaAmigos");
    for (let i = 0; i < amigos.length; i++) {
        listado.innerHTML += `<li> ${amigos[i]} </li>`;
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let indice = Math.floor(Math.random()*`${amigos.length}`);
    resultado.innerHTML = amigos[indice];
}

