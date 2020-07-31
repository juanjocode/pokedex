import React, { useEffect } from 'react';
// import PokeData from '../PokeData';
import { getType } from '../../img/images';
import { connect } from 'react-redux';
import Card from '../Card/Card';
import { getPokemon, setPokemons } from '../../Action/PokemonAction';



const CardMain = (props) => {

  useEffect ( () => {

    const getApi = async () => {
      try {
        const data = await fetch ('https://protected-castle-45403.herokuapp.com/pokemon/?format=json')
        const resp = await data.json();
        props.getPokemon(resp)
        props.setPokemons(resp)
        // console.log(resp)
        return resp
      } catch (error) {
        console.log(error)
      }
    }
    getApi();
  }, [])

  // useEffect ( () => {

  //   const getApi = async () => {
  //     try {
  //       const data = await fetch ('http://localhost:3000/pokemon')
  //       const resp = await data.json();
  //       props.getPokemon(resp)
  //       props.setPokemons(resp)
  //       console.log(resp)
  //       return resp
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getApi();
  // }, [])

  return (

    <div className="cards__container">    
     
        {/* {console.log(props.currentPokemon.length)} */}
        {/* {props.currentPokemons.length === 0 && ""}
          {props.currentPokemons.map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment>
        ))}   */}

        {props.currentPokemons.length === 0 && ""}
          {props.currentPokemons.filter(pokemon => pokemon.name_pokemon === props.send).map(filteredPokemon => (
          <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
          </React.Fragment>
        ))}

     
    </div>
  )
}

const mapStateToProps = state => ({
  initialState: state.pokemon,
  currentPokemons: state.currentPokemons
}) 

const mapDispatchToProps = { getPokemon,  setPokemons}

export default connect(mapStateToProps, mapDispatchToProps)(CardMain);