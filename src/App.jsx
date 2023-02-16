import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "./hooks/useAuth"

function App() {
  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState(1)

  const { logout } = useAuth()
  const navigate = useNavigate()

  const fetchPokemons = async (page = 1) => {
    const limit = 8
    const offset = (page - 1) * limit
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    const data = await response.json()
    const results = data.results.map(result => {
      // https://pokeapi.co/api/v2/pokemon/1/
      const id = result.url.split('/')[6]
      // console.log(id)
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`

      // return result

      return {
        name: result.name,
        id,
        image,
      }



    })
    console.log(results)
    // console.log(results)
    setPokemons(results)

  }

  const handleNextPage = () => {
    setPage(page + 1)
  }
  const handlePrevPage = () => {
    setPage(page - 1)
  }

  useEffect(() => {
    fetchPokemons(page)
  }, [page])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="pokemonList">
      <h1 className="title">Pokemon List</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="pokemons">
        {pokemons.map(pokemon => {
          return (
            <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
              <div className="pokemon">
                <img src={pokemon.image} />
                <h3>{pokemon.name}</h3>
              </div>
            </Link>
          )
        })}

      </div>
      <div className="pagination">
        <button onClick={handlePrevPage}>Prev</button>
        <span>{page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>

  )

}
export default App

