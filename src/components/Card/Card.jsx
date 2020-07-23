import React from 'react';
import { getType } from '../../img/images';
import { connect } from 'react-redux';

const testPokemon = {
  type: 'asd',
}

const Card = (props) => {

  const { id, generation, name_pokemon, type1, type2, abilities, experience_growt, sp_attack, sp_defense } = props;

  return (

    <div className="card">
      <div className="card__image-container" style={{ background: "var(--gradientGrass)" }}>
        <div className="card__number-gen">
        <div className="card__number" style={{ color: "var(--colorGrass" }}>{id}</div>
        <div className="card__gen" style={{ color: "var(--colorGrass" }}>G{generation}</div>
      </div>
        <div className="poke-image">
          <div className="image__size">
            {id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} alt="pokemon" /> : id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`} alt="pokemon" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`} alt="pokemon" />}
          </div>
          <h2 style={{ color: "var(--colorGrass" }} >  {name_pokemon}</h2>
          <div className="card__type">
          <div className="card__type1" >
            <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
              <img src={getType(testPokemon.type)} alt="type" />
            </div>
            <span>{type1}</span>
          </div>
          <div className="card__type2" >
            {type2 ? <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
              <img src={getType(testPokemon.type)} alt="type" />
            </div> : "" }
            <span>{type2}</span>
          </div>
          </div>
          <div className="card__abilities">
            <span className="label">Abilities:</span>
            <span className="abilitie">{abilities}</span>
          </div>
          <div className="card__experience">
            <span className="label">Experience:</span>
            <span className="experience">{experience_growt}</span>
          </div>
          <div className="card__progress">
            <span className="label">ATK</span>
            <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
              <div className="progress" style={{ backgroundColor: "var(--colorGrass)", width: sp_attack }}></div>
            </div>
          </div>
          <div className="card__progress">
            <span className="label">DEF</span>
            <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
              <div className="progress" style={{ backgroundColor: "var(--colorGrass)", width: sp_defense }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  initialPokeData2: state.pokemon
}) 

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Card);