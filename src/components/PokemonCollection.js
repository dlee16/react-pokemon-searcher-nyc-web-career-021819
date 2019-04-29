import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  renderAllPokemon = () => {
    return this.filterPokemon().map(pokemon => {
      return (
        <PokemonCard key={pokemon.id} pokemon={pokemon}/> 
        )}
    )
  }

  filterPokemon = () => {
    return this.props.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.input))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderAllPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
