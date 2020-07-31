import React, { useEffect } from 'react';
// import PokeData from '../PokeData';
import { getType } from '../../img/images';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { getPokemon } from '../../Action/PokemonAction';


const CardMainAttack = (props) => {

  useEffect ( () => {

    const getApi = async () => {
      try {
        const data = await fetch ('https://protected-castle-45403.herokuapp.com/pokemon/?format=json')
        const resp = await data.json();
        props.getPokemon(resp)
        return resp
      } catch (error) {
        console.log(error)
      }
    }
    getApi();
  }, [])

  return (

    <div >
      {props.initialState.length === 0 && "Cargando"}
      {props.initialState.filter(pokemon => pokemon.name_pokemon === props.send).map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
          <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  initialState: state.pokemon
}) 

const mapDispatchToProps = { getPokemon }

export default connect(mapStateToProps, mapDispatchToProps)(CardMainAttack);