import React, { useState } from 'react'
import { modifyName } from '../api/userFectch'

export default function Edit({pokemonId}) {

    const [newName, setNewName] = useState('')
    const [confirmNewName, setConfirmNewName] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const onChangeNewNameHandle = (e) => {
        setNewName(e.target.value)
    }
    const onChangeConfirmNewNameHandle = (e) => {
        setConfirmNewName(e.target.value)
    }
    const changeName = () => {
        if(newName === confirmNewName){
            modifyName(pokemonId, newName)
            setError(false)
            setSuccess(true)
            setNewName('')
            setConfirmNewName('')
        }else{
            setError(true)
            setSuccess(false)
        }
    }

  return (
    <div>
        <div>
            <h2>Edit Pokemon Name</h2>
        </div>
        <div>
            <label>New Name</label>
            <input type="text" value={newName} onChange={onChangeNewNameHandle} />
        </div>
        <div>
            <label>Confirm New Name</label>
            <input type="text" value={confirmNewName} onChange={onChangeConfirmNewNameHandle} />
        </div>
        <div>
            <button onClick={changeName}>Change Name</button>
        </div>
        <div>
            {
                error ?
                <div>
                    <span>Error: Names do not mach</span>
                </div>
                :
                null
            }
            {
                success ?
                <div>
                    <span>Name changed</span>
                </div>
                :
                null
            }
        </div>
    </div>
  )
}
