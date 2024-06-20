// 1 - traerme con fetch los datos de la API -- CHECK!
// 2 -capturar el espacio en el html para poder poner los personajes -- CHECK!
// 3 - crear un html dentro con un bucle para traerme los 20 personajes -- CHECK!
// 4 - poner las css para que estén uno al lado del otro  -- CHECK!

//hacer que los botones funcionen

const listChgaracterUL = document.getElementById("character-list")
const prevBtn = document.getElementById("prev-page")
const nextBtn = document.getElementById("next-page") 

let page = 1

const getCharacter = () => {
  listChgaracterUL.innerHTML = ""
  if(page === 1) {
    prevBtn.disabled = true
    prevBtn.classList.add("disabled")
  } else {
    prevBtn.disabled = false
    prevBtn.classList.remove("disabled")

  }
  fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)  
    .then(response => response.json())
    .then(data => {
      const characters = data.results
      characters.forEach(character => {
        const template = `
          <li>
            <img src=${character.image} alt=${character.name} />
            <h2><span>Nombre:</span>${character.name}</h2>
            <p><span>Especie:</span>${character.species}</p>
          </li>
        `
        listChgaracterUL.innerHTML += template
      });
    })
}

getCharacter()


const changePage = (clickValue) => {
  clickValue
  getCharacter()
}

nextBtn.addEventListener("click", () => 
  {changePage(page++)
    console.log(page)
  }

)
prevBtn.addEventListener("click", () => {
  changePage(page--)
  console.log(page)

})



