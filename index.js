const input = document.querySelector('#input');
const lista = document.querySelector('.lista');


const showPkmn = (nombre, img) => {
    lista.innerHTML = `<li><img class="pkmn" src="${img}"><h2>${nombre.charAt(0).toUpperCase() + nombre.slice(1)}</h2></li>`
    

}

input.addEventListener("keyup", async (e) => {
    e.preventDefault();
    const id = input.value;
    const promise = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
    const data = await promise.json();
    let nombre = data.name
    let img = data.sprites.front_default

    showPkmn(nombre, img)
})





