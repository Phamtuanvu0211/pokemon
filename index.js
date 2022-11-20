function lowerCaseName(string) {
    return string.toLowerCase();
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

const getPokemon = () => {
    const name = document.getElementById("pokemonName").value;
    const pokemonName = lowerCaseName(name);

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => 
    {
        document.querySelector(".pokemonBox").innerHTML =
        `
        <div>
            <img 
                src="${data.sprites.other["official-artwork"].front_default}"
                alt = "Pokemon name"
            />
        </div>
         <div class="pokemonInfos">
            <h1>${capitalizeFirstLetter(data.name)}</h1>
            <p>Cân nặng: ${data.weight}</p>
         </div>
         `;
    })
    .catch((err) => {
        document.querySelector(".pokemonBox").innerHTML =
        `<h4> Không tìm thấy pokemon </h4>`;
    })
}