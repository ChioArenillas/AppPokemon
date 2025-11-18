import React from 'react'
import Link from 'next/link'

export default function Favourits({ favourites, deleteFavourite }) {

  return (
    <div>
      <div>
        <h2>Favourite Pokemons</h2>
      </div>
        {
          favourites.map((pokemon) => {
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
          <button onClick={() => deleteFavourite(pokemon)} >Delete from Favourites</button>
          </div>
        })
      }
    </div>
  )}
