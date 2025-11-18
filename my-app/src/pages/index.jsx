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
      <Pokemons addFavourite={addFavourite} favourites={favourites} />
    </div>
    <div>
      <Favourits favourites={favourites} deleteFavourite={deleteFavourite} />
    </div>
    </>
  );
}
