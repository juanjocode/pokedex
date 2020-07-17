import React from 'react';

import PokeData from './PokeData';


const API = 'https://jsonplaceholder.typicode.com/users';

const PokeSlider = (props) => {

  const initialPokeSlider = PokeData(API);

  return (
      <div>
        {initialPokeSlider.filter(person => person.id === 5).map(filteredPerson => (
          <p key={filteredPerson.id}>
            {/* {filteredPerson.id }     */}
          </p> 
        ))}  
        {props.prueba}
      </div>
  );
}

export default PokeSlider;