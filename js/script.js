
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

function getPersonajes(datos) {
const resultados = fetch(`https://rickandmortyapi.com/api/character/?page=${numero}`);
resultados
.then(response => response.json())
    .then(data => datos(data))//callback(data))
        .catch(error => console.error('Error en los datos', error))
}


const listaPersonajes = (data) => {
vistaPersonajes.innerHTML = '';
    data.results.forEach(personaje => {
document.getElementById('character-list').innerHTML += 
 `<li class='personajesTarjeta'>
<img src=${personaje.image} 
alt=${personaje.name}/>
<h2>${personaje.name}</h2>
<p>${personaje.species}</p></li>`;

})
}

getPersonajes(listaPersonajes);

// DATA

/*
fetch('https://rickandmortyapi.com/api/character/?page=1")
 .then(response => response.json())
 .then(data => {
    const characters = data.results
    characters.forEach(character =x {
    const template =  
    `<li class='personajesTarjeta'>
<img src=${personaje.image} 
alt=${personaje.name}/>
<h2><span>Nombre: </span>${personaje.name}</h2>
<p><span>Especie: </span>${personaje.species}</p></li>`;

listCharacterUL.innerHTML += template
});

});

 const const listCharacterUL = document.getElementById('character-list')
// console.log(listCharacterUL)




*/

