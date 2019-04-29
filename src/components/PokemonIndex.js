import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    input: ""
  }

  fetchPokemon = () => {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemons => {
      this.setState({
        pokemons: pokemons
      })
    })
  }

  postPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST', 
      body: JSON.stringify(pokemon), 
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( res => res.json())
    .then(newPokemon => {
      this.setState({
        pokemons: [...this.state.pokemons, newPokemon]
      })
    })
  }

  componentDidMount(){
    this.fetchPokemon()
  }

  searchChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  filterHp = () => {
    const filteredPokemon = this.state.pokemons.sort((pokemon1, pokemon2) => {
      return pokemon1.stats.find(stat => stat.name === "hp").value - pokemon2.stats.find(stat => stat.name === "hp").value
    } )
    this.setState({
      pokemons: filteredPokemon
    })
  }
  
  sortName = () => {
    const filteredPokemon = this.state.pokemons.sort((pokemon1, pokemon2) => {
      return pokemon1.name.localeCompare(pokemon2.name)
    })
    this.setState({
      pokemons: filteredPokemon
    })
  }

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <button onClick={this.filterHp}>Filter by HP</button>
        <button onClick={this.sortName}>Sort by name</button>
        <Search onSearchChange={this.searchChange} value={this.state.input} showNoResults={false} />
        <br />
        <PokemonCollection input={this.state.input} pokemons={this.state.pokemons} />
        <br />
        <PokemonForm postPokemon={this.postPokemon}/>
      </div>
    )
  }
}

export default PokemonPage
