import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const PokeCard = () => {

  //Api
  const url = 'https://pokeapi.co/api/v2/pokemon'

  const { id } = useParams();

  // Estados
  const [pokemon, setPokemon] = useState({});
  const [imgPoke, setImgPoke] = useState();

  // useNavigate
  const navigate = useNavigate()

  const volver = () => {
    navigate('/pokemon')
  }

// Actualiza al cambiar id
  useEffect(() => {
    fetch(`${url}/${id}`).then(res => res.json())
        .then(data => {
            setPokemon(data)
            setImgPoke(data['sprites']['other']['official-artwork']['front_default'])
        })
}, [id])

console.log(pokemon);

  return (
    <div>PokeCard</div>
  )
}
