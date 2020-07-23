import React from 'react';
// import PokeData from '../PokeData';
import { getType } from '../../img/images';
import { connect } from 'react-redux';
import Card from '../Card/Card';

const testPokemon = {
  type: 'asd',

}

var progressValue = "60%"
var progressValue2 = "55%"

const CardMain = (props) => {

  return (

    <div >
      {props.initialPokeData2.filter(pokemon => pokemon.name_pokemon === props.send).map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
          <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  initialPokeData2: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CardMain);