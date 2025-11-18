import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { addPokemon } from './api/userFectch'

export default function CreationPage() {

  const router = useRouter()

  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')

  const idHandler = (e) => {
    setId(e.target.value)
  }
  const nameHandler = (e) => {
    setName(e.target.value)
  }
  const heightHandler = (e) => {
    setHeight(e.target.value)
  }
  const weightHandler = (e) => {
    setWeight(e.target.value)
  }
  const typeHandler = (e) => {
    setType(e.target.value)
  }
  const descriptionHandler = (e) => {
    setDescription(e.target.value)
  }
  const addPokemonClick = () => {
    addPokemon (id, name, height, weight, type, description)
    router.back()
  }

  return (
    <div className='page'>
      <div>
        <h2 className='title'>POKEMON CREATION</h2>
      </div>
      <div className='form'>
        <div>
          <span>Id: </span>
          <input type="text" value={id} onChange={idHandler} />
        </div>
        <div>
          <span>Name: </span>
          <input type="text" value={name} onChange={nameHandler} />
        </div>
        <div>
          <span>Height: </span>
          <input type="text" value={height} onChange={heightHandler}/>
        </div>
        <div>
          <span>Weight: </span>
          <input type="text" value={weight} onChange={weightHandler}/>
        </div>
        <div>
          <span>Type: </span>
          <input type="text" value={type} onChange={typeHandler} />
        </div>
        <div>
          <span>Description: </span>
          <input type="text" value={description} onChange={descriptionHandler}/>
        </div>
      </div>
      <div>
        <button onClick={addPokemonClick}>Add Pokemon</button>
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
