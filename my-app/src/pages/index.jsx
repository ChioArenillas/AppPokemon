


/* FALTAAAAA
que si el el formulario de creación le dan a crear estando vacío salte error y no te deje
que en el formulario de creación solo te deje meter números, o por ej en el tipo que esté preseleccionado
*/



import Link from 'next/link'
import Pokemons from './components/Pokemons';
import Favourits from './components/Favourits';
import { useState } from 'react';

export default function Home() {

  const [favourites, setFavourites] = useState([])

  const addFavourite = (pokemon) => {
    if (!favourites.find(f => f.id === pokemon.id)) {
      setFavourites([...favourites, pokemon])
    }
  }

  const deleteFavourite = (pokemon) => {
    setFavourites(favourites.filter(f => f.id !== pokemon.id));
  };

  return (
    <div className='page'>
    <h1 className='title'>POKEMONS</h1>
    <div className='menu'>
      <button>
        <Link className='button-link' href={'/AddPage'}>ADD POKEMON</Link> 
      </button>
      <button>
        <Link className='button-link' href={'/ContactPage'}>CONTACT</Link> 
      </button>
    </div>
    <div>
      <Pokemons addFavourite={addFavourite} favourites={favourites} />
    </div>
    <div>
      <Favourits favourites={favourites} deleteFavourite={deleteFavourite} />
    </div>
    </div>
  );
}
