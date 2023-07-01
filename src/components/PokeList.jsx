import Button from 'react-bootstrap/Button'
import React from 'react'

export const PokeList = () => {
  return (
    <div className='container'>
      <h1>Selecciona un pokemon</h1>
      <div className='pokemonSeleccionado'>
        <select>
          <option value="">Elige tu pokemon</option>

          {/* //Agrega opciones desde api */}
        </select>
        <Button variant="dark">Ver Detalle</Button>
      </div>
    </div>
  )
}
