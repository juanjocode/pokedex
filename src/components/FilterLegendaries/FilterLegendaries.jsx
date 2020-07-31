import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';


class FilterLegendaries extends React.Component {
  render() {
    return (
      <div className="cards__container">

        {this.props.initialPokeSlider.filter(pokemon => pokemon.is_legendary === 1).map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment> 
        ))}



        {/* {this.props.handleData2 === "" ? "" : this.props.handleData2 === true ? "" : this.props.initialPokeSlider.filter(pokemon => pokemon.attack >= this.props.handleData[0] && pokemon.attack <= this.props.handleData[1]).map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment> 
        ))} */}

      </div> 
    )
  }
}

const mapStateToProps = state => ({
  initialPokeSlider: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps) (FilterLegendaries);