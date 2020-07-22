import React from 'react'
import PokeData from '../PokeData';
import poison from '../../img/types/poison.svg';
import grass from '../../img/types/grass.svg';


const API = 'https://jsonplaceholder.typicode.com/users';

var progressValue = "60%"
var progressValue2 = "55%"

const CardMain = (props) => {

  // const { numero generacion urlImage tipo }

  const initialPokeData = PokeData(API);

  return (

    <div className="card">
    
      <div className="card__image-container" style={{ background: "var(--gradientGrass)" }}>

        <div className="card__number-gen">
          <div className="card__number" style={{ color: "var(--colorGrass" }}>#001</div>
          <div className="card__gen" style={{ color: "var(--colorGrass" }}>G1</div>
        </div>


          <div className="poke-image">
            <div className="image__size">

              {initialPokeData.filter(person => person.name === props.send).map(filteredPerson => (
                <React.Fragment key={filteredPerson.id}>
                  {filteredPerson.id > 99 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${filteredPerson.id}.png`} alt="f" /> : filteredPerson.id > 9 ? <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${filteredPerson.id}.png`} alt="f" /> : <img className="img--img" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${filteredPerson.id}.png`} alt="f" />}
                </React.Fragment>
              ))}
              
            </div>
            
            <h2 style={{ color: "var(--colorGrass" }} >  {props.send}</h2>

            <div className="card__type">
                

              <div className="card__type1" >
                <div className="card__type-icon" style={{ background: "var(--gradientGrass)" }}>
                  <img src={grass} alt="type" />
                </div>
                <span>Grass</span>
              </div>
{/* 
              <div className="card__type2" >
                <div className="card__type-icon" style={{ background: "var(--gradientPoison)" }}>
                  <img src={poison} alt="type" />
                </div>
                <span>Poison</span>
              </div> */}

            </div>
            <div className="card__abilities">
              <span className="label">Abilities:</span>
              <span className="abilitie">Overgrow</span>
              <span className="abilitie">Chlorophyll</span>
            </div>
            <div className="card__experience">
              <span className="label">Experience:</span>
              <span className="experience">1059860</span>
            </div>

            {/* progress que se debe volver un cpm */}
            <div className="card__progress">
              <span className="label">ATK</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGrass)", width: `${progressValue}` }}></div>
              </div>
            </div>
            <div className="card__progress">
              <span className="label">DEF</span>
              <div className="poke-progress" style={{ backgroundColor: "var(--grayGeneral)" }}>
                <div className="progress" style={{ backgroundColor: "var(--colorGrass)", width: `${progressValue2}` }}></div>
              </div>
            </div>

          </div>
        
      </div>
    </div>
 

  )
}

export default CardMain;