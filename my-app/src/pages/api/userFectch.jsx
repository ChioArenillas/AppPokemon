import { pokemons } from './dbPokemons'

export const getPokemons = () => {
    return pokemons.map(pokemon => {
        return {
            id: pokemon.id,
            name: pokemon.name
        }
    })
}

export const getPokemonsById = (idParam) => {
    let pokemonAux = pokemons.find(pokemon => pokemon.id == idParam)
    return pokemonAux
}

export const addPokemon = (id, name, height, weight, type, description) => {
    pokemons.push({
        id: id,
        name: name,
        height: height,
        weight: weight,
        type: type,
        description: description
    })
}

export const deletePokemonById = (idPokemon) => {
    let pokemonAux = pokemons.findIndex(p => p.id == idPokemon)
    pokemons.splice(pokemonAux, 1)
}

