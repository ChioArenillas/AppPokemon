
import React from 'react'

export default function Info(props) {
  return (
    <>
    <div>
        <p>{props.descripcion}</p>
    </div>
    <div>
        <p>{
            props.tipo.map(t => { //se pone una T de tipo, se podría poner cualquier cosa
                return <span className='tipo'>{t}</span>
            })
            }</p>
    </div>
    </>
  )
}
