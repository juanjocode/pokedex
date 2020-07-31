import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';



const FilterByType = (props) => {

  return (
    <div className="cards__container">
{/* handleIconBug handleIconDark handleIconDragon handleIconElectric handleIconFairy handleIconFight handleIconFire handleIconFlying handleIconGhost handleIconGrass handleIconGround handleIconIce handleIconNormal handleIconPoison handleIconPsychic handleIconRock handleIconSteel handleIconWater */}

      {props.handleIconBug === undefined ? "" : props.handleIconBug === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "bug").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconDark === undefined ? "" : props.handleIconDark === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "dark").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconDragon === undefined ? "" : props.handleIconDragon === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "dragon").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconElectric === undefined ? "" : props.handleIconElectric === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "electric").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconFairy === undefined ? "" : props.handleIconFairy === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "fairy").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconFight === undefined ? "" : props.handleIconFight === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "fighting").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconFire === undefined ? "" : props.handleIconFire === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "fire").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconFlying === undefined ? "" : props.handleIconFlying === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "flying").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconGhost === undefined ? "" : props.handleIconGhost === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "ghost").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconGrass === undefined ? "" : props.handleIconGrass === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "grass").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconGround === undefined ? "" : props.handleIconGround === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "ground").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconIce === undefined ? "" : props.handleIconIce === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "ice").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconNormal === undefined ? "" : props.handleIconNormal === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "normal").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconPoison === undefined ? "" : props.handleIconPoison === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "poison").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconPsychic === undefined ? "" : props.handleIconPsychic === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "psychic").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconRock === undefined ? "" : props.handleIconRock === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "rock").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconSteel === undefined ? "" : props.handleIconSteel === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "steel").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {props.handleIconWater === undefined ? "" : props.handleIconWater === true ? props.initialFilterByType.filter(pokemon => pokemon.type1 === "water").map(filteredPokemon => (
        <React.Fragment key={filteredPokemon.id}>
            <Card id={filteredPokemon.id} generation={filteredPokemon.generation} name_pokemon={filteredPokemon.name_pokemon} type1={filteredPokemon.type1} type2={filteredPokemon.type2} abilities={filteredPokemon.abilities.match(/[a-zA-Z]+\s?[a-zA-Z]+/g).join(' - ')} experience_growt={filteredPokemon.experience_growt} sp_attack={filteredPokemon.sp_attack} sp_defense={filteredPokemon.sp_defense}/>
        </React.Fragment> 
      )) : "" }
      {/* {props.handleData2 === "" ? "" : } */}
    </div> 
  )
}

const mapStateToProps = state => ({
  initialFilterByType: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps) (FilterByType);