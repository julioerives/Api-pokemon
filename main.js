const URL = 'https://pokeapi.co/api/v2/pokemon/';
const searchInput = document.getElementById('search');
const pokedexContainer = document.getElementById('pokedex');

function showError(message) {
    pokedexContainer.innerHTML = `<p class="error">${message}</p>`;
}
async function searchPokemon() {
    var searchedPokemon = searchInput.value.toLowerCase();

    try {
        const response = await fetch(URL + searchedPokemon);
        if (!response.ok) {
            // Si la respuesta no es exitosa, mostrar un mensaje de error
            showError(`No se encontró ningún Pokémon llamado "${searchedPokemon}"`);
            return;
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        // Mostrar los datos del Pokémon en el contenedor de resultados
        pokedexContainer.innerHTML = 
        `
          <div class ="img-pokemon">
          <h2>${data.name.toUpperCase()}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          </div>
           <div class="inf-pokemon">
           <p>Número: ${data.id}</p>
           <p>Altura: ${data.height / 10}m</p>
           <p>Peso: ${data.weight / 10}km</p>
           </div>
        `;
        a=data.id;
        
    } catch (error) {
        // Si ocurre algún error durante la petición, mostrar un mensaje de error
        showError('Ha ocurrido un error al buscar el Pokémon');
        console.error(error);
    }
}
var a =0;
 async function mas(){
    a++;
    searchInput.value=a;
    const response = await fetch(URL + a);
    const data = await response.json();
    pokedexContainer.innerHTML = 
    `
      <div class ="img-pokemon">
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      </div>
       <div class="inf-pokemon">
       <p>Número: ${data.id} </p>
       <p>Altura: ${data.height / 10}m </p>
       <p>Peso: ${data.weight / 10}km </p>
       </div>
    `;
}
async function menos(){
    if(a>0){
        a--;
        searchInput.value=a;
        const response = await fetch(URL + a);
    const data = await response.json();
    pokedexContainer.innerHTML = 
    `
      <div class ="img-pokemon">
      <h2>${data.name.toUpperCase()}</h2>
      <img src="${data.sprites.front_default}" alt="${data.name}">
      </div>
       <div class="inf-pokemon">
       <p>Número: ${data.id}</p>
       <p>Altura: ${data.height / 10}m</p>
       <p>Peso: ${data.weight / 10}km</p>
       </div>
    `;
    }
}
document.querySelector('button').addEventListener('click', searchPokemon);
document.querySelector("#mas").addEventListener("click",mas);
document.querySelector("#menos").addEventListener("click",menos);