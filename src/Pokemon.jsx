import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const Pokemon = () => {
  const { id } = useParams()

  const [pokemon, setPokemon] = useState(null)
  // const [pokemon, setPokemon] = useState({ name: '', types: []})


  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    // console.log(data)
    setPokemon(data)

  }

  useEffect(()=>{
    getPokemon(id)
  }, [])

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

  return (
    <div className='pokemonList' style={{display: 'grid', placeContent: 'center'}}>
      <div className='pokemon'>
        <Link to='/'>Back</Link>
        <div>Pokemon #{id}</div>
        <div>{pokemon?.name}</div>
        <div>Types: {pokemon?.types.map(type => type.type.name).join(', ')}</div>
        <img src={image} />
      </div>


    </div>
  )
}

export default Pokemon