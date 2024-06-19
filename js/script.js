
//variables

let numero = 1;
const btnPrev = document.getElementById('prev-page');
const btnNext = document.getElementById('next-page');
const vistaPersonajes = document.getElementById('character-list')

//FUNCIÓN BOTONES

btnNext.addEventListener('click', () =>{
 if(numero <= 42) {
    numero += 1;
 getPersonajes(listaPersonajes);
}
})

btnPrev.addEventListener('click', () =>{
    if (numero > 1);
    numero -= 1;
    getPersonajes(listaPersonajes);
   })

   // FETCH

function getPersonajes(callback) {
const resultados = fetch(`https://rickandmortyapi.com/api/character/?page=${numero}`);
resultados
.then(response => response.json())
    .then(data => callback(data))
        .catch(error => console.error('Error en los datos', error))
}


const listaPersonajes = (data) => {
vistaPersonajes.innerHTML = '';
    data.results.forEach(personaje => {
 const contenedor = document.getElementById('character-list').innerHTML += 
 `<li class='personajesTarjeta'>
<img src=${personaje.image} 
alt=${personaje.name}/>
<h2>${personaje.name}</h2>
<p>${personaje.species}</p></li>`;

})
}

getPersonajes(listaPersonajes);