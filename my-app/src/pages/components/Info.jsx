import React from 'react';


export default function Info(props) {
  return (
    <>
    <div>
        <p>{props.descripcion}</p>
    </div>
    <div>
        <ul>{
            props.tipo.map((tipo, index) => { //se pone una T de tipo, se podría poner cualquier cosa
                return <li key={index} className={tipo === 'fuego' ? 'fuego' : 'tierra'}>{tipo}</li>
            })
            }</ul>
    </div>
    </>
  )
}
