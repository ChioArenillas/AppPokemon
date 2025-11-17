import React, {useEffect, useState} from 'react';
import { getPokemonsById } from '../api/userFectch';

export default function PokemonDetail({pokemonId}) {

    const [pokemonLocal, setPokemonLocal] = useState({})
  
    useEffect(() => {
      let pokemonAux = getPokemonsById(pokemonId)
      setPokemonLocal(pokemonAux)
    }, [])
  
    return (
      <div>
        <div>
          <span>Name: {pokemonLocal?.name}</span>
        </div>
        <div>
          <span>Height: {pokemonLocal?.height}</span>
        </div>
        <div>
          <span>Weight: {pokemonLocal?.weight}</span>
        </div>
        <div>
          <span>Type: {pokemonLocal?.type}</span>
        </div>
        <div>
          <span>Description: {pokemonLocal?.description}</span>
        </div>
      </div>
  )
}
