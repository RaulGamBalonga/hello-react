
import React, { useState } from 'react'

const Components = () => {
    const [text, setText] = useState()
    const [update, setUpdate] = useState()

    const textOnChange = (event) => {
        setText(event.target.value)
    }
    const buttonOnClick = () => {
        setUpdate(text)
    }

  return (
    <div>
        <input type="text" value={text} onChange = {textOnChange} />
        <button onClick={buttonOnClick} >Actualizar</button>
        <p>Texto input: {text}</p>
        <p>Texto actualizado: {update}</p>
    </div>
  )
}

export default Components