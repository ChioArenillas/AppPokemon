import Link from 'next/link'
import Pokemons from './components/Pokemons';
import Favoritos from './components/Favoritos';

export default function Home() {

  return (
    <>
    <h1>Pagina Pokemons</h1>
    <ul>
      <li>
        <Link href={'/CreationPage'}>Creación Pokemon</Link> 
      </li>
      <li>
        <Link href={'/ContactPage'}>Contacto</Link> 
      </li>
    </ul>
    <div>
      <Pokemons />
    </div>
    <div>
      <Favoritos />
    </div>
    </>
  );
}
