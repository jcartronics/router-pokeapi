import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const PokeList = () => {

  // Api
  const url = 'https://pokeapi.co/api/v2/pokemon';

  // useNavigate
  const navigate = useNavigate();

  //Estados
  const [pokeList, setPokeList] = useState([]);
  const [pokemonSeleccionado, setPokemonSeleccionado] = useState('');

  const elegirPokemon = () => {
    if (pokemonSeleccionado !== ''){
      navigate(`/pokemon/${pokemonSeleccionado}`)
    } 
  }

  useEffect(() =>  {
    fetch(url).then(res => res.json())
    .then(data => {
      console.log(data)
        setPokeList(data.results.map(result => result.name))
        console.log(data.results)
    })
}, [])

  return (
    <div className='container'>
      <h1>Selecciona un pokemon</h1>
      <div className='pokemonSeleccionado'>
        <select onChange={(e) => setPokemonSeleccionado(e.target.value)}>
          <option value="">Elige tu pokemon</option>

          {/* //Agrega opciones desde api */}
          {
            pokeList.map(pokemon => {
              return <option key={pokemon} value={pokemon}>{pokemon}</option>
            })
          }
        </select>
        <Button variant="dark" onClick={elegirPokemon}>Ver Detalle</Button>
      </div>
    </div>
  )
}
