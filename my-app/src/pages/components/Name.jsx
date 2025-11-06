/* 
import React from 'react'

export default function Name(props) {
    const name = props.name
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}
 */

import React, { useState } from 'react'

export default function Counter() {
    const [clickState, setClick] = useState(0)

    const changeClickCounter = (e) => {
        setClick(clickState +1)
    }

  return (
    <>
      <button onClick={changeClickCounter}>Click me</button>
      <p>Clicks: {clickState} </p>
    </>
  )
}