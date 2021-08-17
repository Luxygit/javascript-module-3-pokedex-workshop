async function getAllPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  const response = await fetch(url); //getting the response information
  
  const { results } = await response.json(); //destructuring to get only the "results" property values of the response turned into JSON
   // console.log({ results });
  return results; //returning the array to have the "name" and "url" in the script.js
}

async function getOnePokemonSprite(url) {
  
    
    const imgResponse = await fetch(url);
    const pokemonUrl = imgResponse.url;

    const pokemonResponse = await fetch(pokemonUrl);
 
    const jdonResp = await pokemonResponse.json();

    console.log(jdonResp.sprites.front_default);
    return jdonResp.sprites.front_default;
    //I've no idea how I did thisssssssssssssssssssssssssssssssss
}

export { getAllPokemon, getOnePokemonSprite };
