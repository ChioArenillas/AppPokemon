import React from 'react'
import PokemonDetail from './components/PokemonDetail'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { deletePokemonById   } from './api/userFectch'

export default function DetailPage() {

  const router = useRouter()
  const { id } = router.query

  const deletePokemon = () => {
    deletePokemonById(id)
    router.back()
  }
  
  return (
    <div>
      <div>
        <h1>POKEMON DETAILS</h1>
      </div>
      <div>
        <PokemonDetail pokemonId={id} />
      </div>

      <p>boton EDITAR que
        cuando lo pulsemos, desaparezca el componente de detalles del pokemon y
        nos aparezca un formulario donde poder cambiar el nombre del pokemon,
        solo debemos cambiar el nombre</p>

      <div>
        <button onClick={deletePokemon}>Delete pokemon</button>
      </div>  
      <Link href={{
        pathname: '/'
      }}>Back to Homepage</Link>
    </div>
  )
}
