import React, { useState } from 'react'
import Detail from './components/Detail'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { deletePokemonById   } from './api/userFectch'
import Edit from './components/Edit'

export default function DetailPage() {

  const router = useRouter()
  const { id } = router.query

  const [isEditing, setIsEditing] = useState(false)

  const deletePokemon = () => {
    deletePokemonById(id)
    router.back()
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }
  
  return (
    <div className='page'>
      <div>
        <h2 className='title'>POKEMON DETAILS</h2>
      </div>
      <div>
        {
          !isEditing ? (
            <Detail pokemonId={id} />
          ) : (
          <Edit pokemonId={id}/>)
        }
      </div>
    <div>
      {!isEditing && (
        <button onClick={toggleEdit}>Edit Pokemon</button>
      )}
    </div>
      <div>
        {!isEditing &&
          <button  onClick={deletePokemon}>Delete pokemon</button>
        }
          </div>  
      <div>
        <button>
        <Link className='button-link' href={{
            pathname:'/'
            }}>Back to Homepage</Link>
        </button>
      </div>
    </div>
  )
}
