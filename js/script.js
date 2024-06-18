

function getPersonajes(datos) {
const resultados = fetch('https://rickandmortyapi.com/api/character');
resultados
.then(response =>
    response.json())
    .then(data => {
datos(data)
    });
}


getPersonajes(data =>
data.results.forEach(personaje => {
    const listaUl = document.getElementById('character-list');
    listaUl.innerHTML += `<li class='personajesTarjeta'>
<img src=${personaje.image} 
alt=${personaje.name}/>
<h2>${personaje.name}</h2>
<p>${personaje.species}</p></li>`


getPersonajes(personaje);

})
)



