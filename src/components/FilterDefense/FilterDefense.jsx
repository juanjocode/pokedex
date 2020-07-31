import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

import { setPokemons } from '../../Action/PokemonAction';

class FilterDefense extends React.Component {
  render() {
    return (
      <div className="cards__container cards__container-defense">
      
        {/* {console.log(this.props.handleChangeDefense, "FilterDefense")} */}
        {this.props.handleChangeDefense === "" ? "" : this.props.handleChangeDefense === true ? "" : this.props.currentPokemons.filter(pokemon => pokemon.defense >= this.props.handleChangeDefense2[0] && pokemon.defense <= this.props.handleChangeDefense2[1]).map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment> 
        ))
        } 

      </div> 
    )
  }
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon,
  currentPokemons: state.currentPokemons
}) 

const mapDispatchToProps = { setPokemons }

export default connect(mapStateToProps, mapDispatchToProps) (FilterDefense);