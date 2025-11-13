
export const getPokemons = () => {
    return pokemons
}

export const getPokemonsById = (id) => {
    let pokemonAux = pokemons.find(pokemon => pokemon.id === idParam)
    return pokemonAux
}