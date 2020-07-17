import React from 'react'
import PokeData from './PokeData';

const API = 'https://jsonplaceholder.typicode.com/users';

const PokeImage = ({name}) => {

  const initialPokeData = PokeData(API);
  
  return (
    <div>
      <div>
        {initialPokeData.filter(person => person.name === name).map(filteredPerson => (
          <p key={filteredPerson.id}>
            {filteredPerson.id > 99 ? <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${filteredPerson.id}.png`}  alt="f" /> : filteredPerson.id > 9 ? <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${filteredPerson.id}.png`}  alt="f" /> : <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${filteredPerson.id}.png`}  alt="f" />}    
          </p> 
        ))}
        <p>Nombre: {name}</p> 
          
      </div>
    </div>
  )
}

export default PokeImage;