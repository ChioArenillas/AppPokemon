import Name from "./components/Name";
import Info from "./components/Info";
import Link from 'next/link'

export default function Home() {

const getPokemonInfo = () => {
  return {
    nombrePokemon: 'Charizard',
    descripcionPokemon: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ligula magna, elementum quis lorem rhoncus, ullamcorper elementum felis. Etiam maximus ante vel enim vestibulum ornare. Nam eget vulputate dui. Nullam viverra nulla id pulvinar euismod. Fusce lorem velit, egestas ac efficitur nec, mattis et metus.',
    tipo: ['fuego', 'tierra'],
  }
}
const pokemonInfo = getPokemonInfo()

  return (
    <>
    <Name name={pokemonInfo.nombrePokemon}/>
    <Info descripcion={pokemonInfo.descripcionPokemon} tipo={pokemonInfo.tipo}/>
    <h1>Router de Next</h1>
    <ul>
      <li>
        <Link href={'/name'}>Name</Link> 
      </li>
      <li>
        <Link href={'/info'}>Info</Link> 
      </li>
    </ul>
    
    </>
  );
}
