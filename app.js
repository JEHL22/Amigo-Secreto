let amigos = [];

let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function agregarAmigo() {
    let nombre = inputAmigo.value;
    if (nombre === '') {
        return alert('Debes escribir un nombre');
    }else{
        amigos.push(nombre);
    }
    mostrarAmigos();
    inputAmigo.value = '';
}

function mostrarAmigos() {
    let lista = listaAmigos;
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        lista.innerHTML += `<li>${amigo}</li>`;
    });
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('No hay amigos para sortear');
        return;
    }
    let indice = Math.floor(Math.random()*amigos.length);
    let amigoSorteado = amigos[indice];
    resultado.innerHTML = `<li>${amigoSorteado}</li>`;
}



