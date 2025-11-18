import React from 'react'
import { getPokemons } from '../api/userFectch';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Pokemons({ addFavourite, favourites }) {

  const [pokemons, setPokemons] = useState([])

  const router = useRouter()
  const {id} = router.query

  useEffect(() => {
    let pokemonsAux = getPokemons()
    setPokemons(pokemonsAux)
  }, [])

  return (
    <>
      <h2>
        All Pokemons
      </h2>
      {
        pokemons.map((pokemon) => {
          const isFavourite = favourites.find(f => f.id === pokemon.id);
          return <div key={pokemon.id} >
          <span>{pokemon.id} </span>
          <span>{pokemon.name} </span>
          <span>
            <Link href={{
              pathname: 'DetailPage',
              query: {
                id: pokemon.id
              }
            }}>Details</Link>
          </span>
          {!isFavourite &&(
          <button onClick={() => addFavourite(pokemon)} >Add to Favourites</button>
          )}
          </div>
        })
      }
    </>
  )
}


