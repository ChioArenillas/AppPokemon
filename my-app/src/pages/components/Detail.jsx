import React, {useEffect, useState} from 'react';
import { getPokemonsById } from '../api/userFectch';

export default function PokemonDetail({pokemonId}) {

    const [pokemonLocal, setPokemonLocal] = useState({})
  
    useEffect(() => {
      let pokemonAux = getPokemonsById(pokemonId)
      setPokemonLocal(pokemonAux)
    }, [])
  
    return (
      <div className='details'> 
        <div>
          <span className='detail-title'>Name: </span>
          <span>{pokemonLocal?.name}</span>
        </div>
        <div>
          <span className='detail-title'>Height: </span>
          <span>{pokemonLocal?.height}</span>
        </div>
        <div>
          <span className='detail-title'>Weight: </span>
          <span>{pokemonLocal?.weight}</span>
        </div>
        <div>
          <span className='detail-title'>Type: </span>
          <span>{pokemonLocal?.type?.join(', ')}</span>
        </div>
        <div>
          <span className='detail-title'>Description: </span>
          <span>{pokemonLocal?.description}</span>
        </div>
      </div>
  )
}
