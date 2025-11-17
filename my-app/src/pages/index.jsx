import Link from 'next/link'
import Pokemons from './components/Pokemons';
import Favoritos from './components/Favoritos';
import { getPokemons } from './api/userFectch';
import { useEffect, useState } from 'react';

export default function Home() {

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    let pokemonsAux = getPokemons()
    setPokemons(pokemonsAux)
  }, [])

    /* const addPokemonFavourite = () => {
      addPokemonFavourite ()
    } */

  return (
    <>
    <h1>POKEMONS</h1>
    <ul>
      <li>
        <Link href={'/CreationPage'}>Pokemon Creation</Link> 
      </li>
      <li>
        <Link href={'/ContactPage'}>Contact</Link> 
      </li>
    </ul>
    <div>
      <h3>
        All Pokemons
      </h3>
      {
        pokemons.map((pokemon, index) => {
          return <div key={index} >
          <span>{pokemon.id} </span>
          <span>{pokemon.name} </span>
          <span>{pokemon.url} </span>
          <span>
            <Link href={{
              pathname: 'DetailPage',
              query: {
                id: pokemon.id
              }
            }}>Go to Pokemon Details</Link>
          </span>
          <button /* onClick={addPokemonFavourite} */>Add to Favorite</button>
          </div>
        })
      }
    </div>
    <div>
      <Favoritos />
    </div>
    </>
  );
}
