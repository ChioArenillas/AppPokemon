import React from 'react'
import Link from 'next/link'

export default function Favourits({ favourites, deleteFavourite }) {

  return (
    <div>
      <div>
        <h2 className='subtitle'>Favourite Pokemons</h2>
      </div>
      <div className='pokemons-list'>
        {
          favourites.map((pokemon) => {
            return <div className='card' key={pokemon.id} >
            <div>{pokemon.id} </div>
            <div>{pokemon.name} </div>
            <div>
              <Link href={{
                pathname: 'DetailPage',
                query: {
                  id: pokemon.id
                }
              }}>Details</Link>
          </div>
          <button onClick={() => deleteFavourite(pokemon)} >Delete from Favourites</button>
          </div>
        })
      }
      </div>
    </div>
  )}
