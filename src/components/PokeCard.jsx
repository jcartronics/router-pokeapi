import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
console.log(pokemon['stats'][0]['base_stat'])
  return (
    <div>
      <Card className='pokeCard' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imgPoke} />
          <Card.Body>
              <Card.Title>{pokemon.name}</Card.Title>
              <Card.Text>{pokemon['stats'][0]['stat']['name']}: {pokemon['stats'][0]['base_stat']}</Card.Text>
              <Card.Text>{pokemon['stats'][1]['stat']['name']}: {pokemon['stats'][1]['base_stat']}</Card.Text>
              <Card.Text>{pokemon['stats'][2]['stat']['name']}: {pokemon['stats'][2]['base_stat']}</Card.Text>
              <Card.Text>{pokemon['stats'][3]['stat']['name']}: {pokemon['stats'][3]['base_stat']}</Card.Text>
              <Card.Text>{pokemon['stats'][4]['stat']['name']}: {pokemon['stats'][4]['base_stat']}</Card.Text>
              <Card.Text>{pokemon['stats'][5]['stat']['name']}: {pokemon['stats'][5]['base_stat']}</Card.Text>
              
              <Button variant="warning" onClick={volver}>Volver</Button>
          </Card.Body>
      </Card>
</div>
  )
}
