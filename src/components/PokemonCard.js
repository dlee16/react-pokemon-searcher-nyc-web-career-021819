import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state ={ 
    toggle: true
  }

  toggleImage = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  togglePokemon = () => {
    if(this.state.toggle){
      return this.props.pokemon.sprites.front}
      else {
        return this.props.pokemon.sprites.back
    }
  }

  render() {
    return (
      <Card onClick={this.toggleImage}>
        <div>
          <div className="image">
            <img src={this.togglePokemon()} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats.find(stat => stat.name === "hp").value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
